// numberToString

export function CihuyIntToStr(number) {
    if (typeof number === 'number') {
      return number.toString();
    } else {
      throw new Error('Input bukan angka.');
    }
  }


  // stringToNumber

export function CihuyStrtoInt(str) {
    const parsedNumber = parseFloat(str);
    if (!isNaN(parsedNumber)) {
      return parsedNumber;
    } else {
      throw new Error('Input bukan string yang valid untuk diubah menjadi angka.');
    }
  }

  // formatDate

export function CihuyDate(date) {
    if (date instanceof Date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
      return date.toLocaleDateString('id-ID', options);
    } else {
      throw new Error('Input bukan objek Date.');
    }
  }

    // arraytostring

export function CihuyArrToStr(arr, separator = ', ') {
    if (Array.isArray(arr)) {
      return arr.join(separator);
    } else {
      throw new Error('Input bukan array.');
    }
  }
      // stringtoarray

export function CihuyStrtoArr(str, separator = ',') {
    if (typeof str === 'string') {
      return str.split(separator);
    } else {
      throw new Error('Input bukan string.');
    }
  }
      // objecttoJSON

export function CihuyObjtoJSON(obj) {
    if (typeof obj === 'object') {
      return JSON.stringify(obj);
    } else {
      throw new Error('Input bukan objek.');
    }
  }
        // jsontoobject

export function CihuyJSONtoStr(jsonString) {
    try {
      const parsedObj = JSON.parse(jsonString);
      if (typeof parsedObj === 'object' && parsedObj !== null) {
        return parsedObj;
      } else {
        throw new Error('JSON tidak valid.');
      }
    } catch (error) {
      throw new Error('Gagal mengonversi JSON menjadi objek.');
    }
  }

        // convertime

export function CihuyTime(time) {
    if (time instanceof Date) {
      const options = { hour: 'numeric', minute: 'numeric', hour12: true };
      return time.toLocaleTimeString('en-US', options);
    } else {
      throw new Error('Input bukan objek Date.');
    }
  }
  
  