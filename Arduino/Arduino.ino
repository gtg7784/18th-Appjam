#include <Adafruit_NeoPixel.h>

#define PIN 6

Adafruit_NeoPixel strip = Adafruit_NeoPixel(16, PIN, NEO_GRB + NEO_KHZ800);

int light = 225;

void setup() {
  Serial.begin(9600);
  
  strip.begin(); 
  strip.show(); 
}

void loop() {
  theaterChase(strip.Color(127, 127, 127), 50); //흰색 출력
}