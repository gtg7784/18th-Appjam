const char *ssid = "iphone";
const char *password = "1234567890";

const char* host = "dimiwords.tk:30001";

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
}
void loop(){
    wificonnect();

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