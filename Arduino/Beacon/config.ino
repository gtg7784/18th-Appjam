#include <SoftwareSerial.h>

SoftwareSerial HM10(13,12); // RX, TX

void setup(){
    Serial.begin(9600);
    HM10.begin(9600);
}

void loop(){
  if (HM10.available()){
    Serial.write(HM10.read());
  }
  if (Serial.available()){
    HM10.write(Serial.read());
  }
}

/*
  AT Commands
  
  AT+RENEW
  AT+RESET
  AT+MARJ0x0001
  AT+MINO0x0001
  AT+ADVI5
  AT+NAMEcube01
  AT+ADTY3
  AT+IBEA1
  AT+DELO2
  AT+PWRM0
  AT+RESET
*/