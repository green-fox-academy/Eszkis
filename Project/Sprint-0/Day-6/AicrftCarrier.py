class Aircraft:
    def __init__(self, typeInput):
        self.ammoStorage = 0
        self.allDmg = 0
        self.type = typeInput
        if self.type == 'F16':
            self.maxAmmo = 8
            self.baseDMG = 30
            self.pirority = False
        elif self.type == 'F35':
            self.maxAmmo = 12
            self.baseDMG = 50
            self.pirority = True

    def fight(self):
        self.ammoStorage = 0
        return self.allDmg

    def refill(self, ammoNumber):
        if ammoNumber > self.maxAmmo:
            ammoNumber = ammoNumber - self.maxAmmo + self.ammoStorage
            self.ammoStorage = self.maxAmmo
            self.allDmg = self.ammoStorage * self.baseDMG
            return ammoNumber
        else:
            self.ammoStorage = ammoNumber
            self.allDmg = self.ammoStorage * self.baseDMG
            ammoNumber = 0
            return ammoNumber

    def getType(self):
        return self.type

    def getStatus(self):
        status = 'Type '+self.type+', Ammo: '+str(self.ammoStorage) + \
            ', Base Damage: '+str(self.baseDMG) + \
            ', All Damage: '+str(self.allDmg)
        return status

    def isPriority(self):
        return self.pirority


class Carrier():
    def __init__(self, ammoStorageInput, HPInput):
        self.aircrafts = []
        self.ammoStorage = ammoStorageInput
        self.HP = HPInput
        self.allDmg = 0

    def add(self, aircraft):
        self.aircrafts.append(aircraft)

    def fill(self):
        if self.ammoStorage == 0:
            return "The ammostorage is empty Sir!"
        else:
            for aircraft in self.aircrafts:
                if self.ammoStorage > 0 and aircraft.pirority:
                    if self.ammoStorage > aircraft.maxAmmo - aircraft.ammoStorage:
                        aircraft.refill(aircraft.maxAmmo -
                                        aircraft.ammoStorage)
                        self.ammoStorage -= aircraft.ammoStorage
                    else:
                        aircraft.refill(self.ammoStorage)
                        self.ammoStorage = 0
            for aircraft in self.aircrafts:
                if self.ammoStorage > 0 and aircraft.pirority == False:
                    if self.ammoStorage > (aircraft.maxAmmo - aircraft.ammoStorage):
                        aircraft.refill(aircraft.maxAmmo -
                                        aircraft.ammoStorage)
                        self.ammoStorage -= aircraft.ammoStorage
                    else:
                        aircraft.refill(self.ammoStorage)
                        self.ammoStorage = 0
            for aircraft in self.aircrafts:
                self.allDmg += aircraft.allDmg

    def fight(self, otherCarrier):
        allDmg = 0
        for aircraft in self.aircrafts:
            allDmg += aircraft.allDmg
        otherCarrier.HP -= allDmg
        self.allDmg = 0

    def getStatus(self):
        if self.HP < 1:
            print('It\'s dead Jim')
        else:
            status = 'HP: '+str(self.HP)+', Aircraft count: '+str(len(self.aircrafts)) + \
                ', AmmoStorage: '+str(self.ammoStorage) + \
                ', Total damage: '+str(self.allDmg)
            print(status)
            for aircraft in self.aircrafts:
                print(aircraft.getStatus())


airC1 = Aircraft('F16')
airC2 = Aircraft('F16')
airC3 = Aircraft('F35')
Carrier1 = Carrier(50, 1000)
airC4 = Aircraft('F16')
airC5 = Aircraft('F16')
airC6 = Aircraft('F35')
Carrier2 = Carrier(14, 1000)
Carrier1.add(airC1)
Carrier1.add(airC2)
Carrier1.add(airC3)
Carrier1.fill()
Carrier1.getStatus()
Carrier2.add(airC4)
Carrier2.add(airC5)
Carrier2.add(airC6)
Carrier2.fill()
Carrier2.getStatus()
Carrier1.fight(Carrier2)
Carrier1.getStatus()
Carrier2.getStatus()