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
    self.ammoStorage=0
    return self.allDmg

  def refill(self, ammoNumber):
    if ammoNumber>self.maxAmmo:
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

  def getStatus(self)
    return f'Type {self.type}, Ammo: {self.ammoStorage}, Base Damage: {self.baseDMG}, All Damage: {self.allDmg}'

  def isPriority(self):
    return self.pirority


airC1 = Aircraft('F16')
airC2 = Aircraft('F16')
airC3 = Aircraft('F35')

print(airC1.getType())
