class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.data[this.length++] = val;
  }


  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const poppedValue = this.data[--this.length];
    this.data[this.length] = undefined;
    if (this.length <= this.capacity / 2) {
      this.resize();
    }
    return poppedValue;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const shiftedValue = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data[--this.length] = undefined;
    if (this.length <= this.capacity / 2) {
      this.resize();
    }
    return shiftedValue;
  }

  unshift(val) {
    if (this.length === this.capacity) {
      this.resize();
    }
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    const newData = new Array(this.capacity * 2);
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
    this.capacity *= 2;
  }
}


module.exports = DynamicArray;