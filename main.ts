radio.onReceivedNumber(function (receivedNumber) {
    edubitTrafficLightBit.setLed(LedColor.All, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    if (receivedNumber == 1) {
        edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    } else if (receivedNumber == 2) {
        edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    } else if (receivedNumber == 3) {
        edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
