var arr = [
    {
      'guest_type': 'crew',
      'first_name': 'Marco',
      'last_name': 'Burns',
      'guest_booking': {
          'room_no': 'A0073',
          'some_array': [7,2,4]
      },
    },
    {
      'guest_type': 'guest',
      'first_name': 'John',
      'last_name': 'Doe',
      'guest_booking': {
          'room_no': 'C73',
          'some_array': [1,3,5,2,4,3]
      },
    },
    {
      'guest_type': 'guest',
      'first_name': 'Jane',
      'last_name': 'Doe',
      'guest_booking': {
          'room_no': 'C73',
          'some_array': [1,3,5,2,4,3]
      },
    },
    {
      'guest_type': 'guest',
      'first_name': 'Albert',
      'last_name': 'Einstein',
      'guest_booking': {
          'room_no': 'B15',
          'some_array': [2,5,6,3]
      },
    },
    {
      'guest_type': 'crew',
      'first_name': 'Jack',
      'last_name': 'Daniels',
      'guest_booking': {
          'room_no': 'B15',
          'some_array': [2,5,6,3]
      },
    },
    {
      'guest_type': 'guest',
      'first_name': 'Alan',
      'last_name': 'Turing',
      'guest_booking': {
          'room_no': 'B15',
          'some_array': [2,5,6,3]
      },
    },
  ];
  function flattenObj(unflattenedObj) {

    const flattenedObj = {}
    Object.keys(unflattenedObj).forEach((key) => {
        const value = unflattenedObj[key]
    
        if (typeof value === 'object'  && !Array.isArray(value) && value != null) {
          Object.assign(flattenedObj, flattenObj(value))
        } else {
            flattenedObj[key] = value
        }
      })
    
      return flattenedObj

  }

  function SumObjValue(obj) {

    let sum = obj.some_array.reduce((a, b) => a + b, 0);

    obj.some_array = sum

    return obj


  }
  function mutateArray(a) {
      const flattendData = a.map((obj) => flattenObj(obj))
      const summedData = flattendData.map(obj => SumObjValue(obj))
      
      return summedData
  }
  
  $(document).ready(function() {
      $('#originalArray').html(JSON.stringify(arr, null, 2));
      $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
  });