#include <ESP8266WIFI.h>
#include <DHT.h>;
#include <MQ2.h>
#include <SoftwareSerial.h>

const char *ssid = "iphone";
const char *password = "1234567890";

const char* host = "dimiwords.tk:30001";

int lpg, co, smoke;

#define DHTPIN 7
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

int chk;
float hum;
float temp;

SoftwareSerial HM10(13,12); // RX, TX

#define LEDPIN 6

void setup (){
    Serial.begin(115200);

    WiFi.disconnect(true);
    delay(1000);
    WiFi.onEvent(WiFiEvent);
    WiFi.begin(ssid, password);
    Serial.println("Wait for WiFi... ");
    
    while (WiFi.status() != WL_CONNECTED) {
      delay(500);
      Serial.print(".");
    }
    
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
    
    
    mq2.begin()

    dht.begin();

    HM10.begin(9600);

    pinMode(LEDPIN, OUTPUT);
}
void loop(){
    wificonnect();

    mq2sensing();

    dhtsensing();


}

void wificonnect(){
    delay(2000);
    
    WiFiClient client;
    const int httpPort = 80;
    if (!client.connect(host, httpPort)) {
        Serial.println("connection failed");
        return;
    }

    client.print(String("GET ") + url + " HTTP/1.1\r\n" +
    "Host: " + host + "\r\n" + 
    "Connection: close\r\n\r\n");
  
    while (client.available() == 0) {
        if (timeout - millis() < 0) {
        Serial.println(">>> Client Timeout !");
        client.stop();
        return;
        }
    }

    while(client.available()){
        String line = client.readStringUntil('\r');
        Serial.print(line);
    }
}

int mq2sensing(){
    float* values= mq2.read(true);
    //lpg = values[0];
    lpg = mq2.readLPG();
    //co = values[1];
    co = mq2.readCO();
    //smoke = values[2];
    smoke = mq2.readSmoke();
    delay(1000);

    return (lpg, co, smoke);
}

int dhtsensing(){
    delay(2000);
    hum = dht.readHumidity();
    temp= dht.readTemperature();

    return (hum, temp);
}

int beacon(){
  if (HM10.available()){
      return HM10.read();
  }
}