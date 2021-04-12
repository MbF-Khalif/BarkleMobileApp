const extract = (str, pattern) => (str.match(pattern) || []).pop() || '';

// Alpha only
export function alphaOnly(str) {
  return extract(str, '[a-zA-Z][\\sa-zA-Z]{0,}');
}

// Nospace at the begining
export function noSpaceBegining(str) {
  return extract(str, '[a-zA-Z0-9][\\sa-zA-Z0-9_@./#&+,-]{0,}');
}

// address with special char accepted
export function specialAddressValidation(str) {
  return extract(str, '^[#.0-9a-zA-Z\s,-]+$')
}

// mobile number rule
export function validMobileNumber(str) {
  return extract(str, '[0-9]+');
}

// validation day 
export function dayValidation(str) {
  if(str.search(/^00/) !== -1){
    return ''; 
  }    
  return extract(str, '^([0-2]?[0-9]|3[01]|10|20)$');
}



// validation hour 
export function hourValidation(str) {
  if(str.search(/^00/) !== -1){
    return ''; 
  }    
  return extract(str, '^([0-1]?[0-2]|0[1-9]|[0-9])$');
}

// validation hour 
export function minutesValidation(str) {
  return extract(str, '^([0-5]?[0-9])$');
}

export function mustAlphaAndNumeric(str){
  return extract(str, '/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/');
}

// validation month 
export function monthValidation(str) {
  if(str.search(/^00/) !== -1){
    return ''; 
  } 
  return extract(str, '^([0-1]?[0-2]|0[1-9]|[0-9])$');
}

export function yearValidation(str) {
  if(str.search(/^0/) !== -1){
    return ""; 
  } 
  return extract(str, '[0-9]+');
}

// school code
export function schoolCode(str) {
  return extract(str, '^[a-zA-Z0-9]+$');
}


// Numbers only
export function NumbersOnly(str) {
  return extract(str, '[0-9]+');
}

// Numbers only min 1 to 999
export function MinimumNumberoneOnly(str) {
  return extract(str, '^(?:[1-9][0-9]{3}|[1-9][0-9]{2}|[1-9][0-9]|[1-9])$');
}

// Numbers only min 0 to 99999999
export function MinimumNumberZeroOnly(str) {
  return extract(str, '^(?:[1-9][0-9]{7}|[1-9][0-9]{6}|[1-9][0-9]{5}|[1-9][0-9]{4}|[1-9][0-9]{3}|[1-9][0-9]{2}|[1-9][0-9]|[0-9])$');
}

// Nospace at the begining with only alpha
export function noSpaceWithAlpha(str) {
  return extract(str, '[a-zA-Z][\\sa-zA-Z&/,-]{0,}');   
}

// remove space
export function removeSpace(str) {
  return str.replace(/\s/g, '');
}

// Alpha & Numbers only
export function AlphaNumbersOnly(str) {
  return extract(str, '[a-zA-Z0-9][\\sa-zA-Z0-9,-]{0,}');
}

