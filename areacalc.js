function calculateRectangleArea(length, width) {
    if (length < 0 || width < 0) {
      return undefined
    }
    else {
      var area = length * width;
      return area
    }
  }
  function calculateTriangleArea(base, height) {
    if (base < 0 || height < 0) {
      return undefined
    }
    else {
      var area = 0.5 * base * height;
      return area
    }
  }
  function calculateCircleArea(radius) {
    if (radius < 0) {
      return undefined
    }
    else {
      var area = Math.PI * radius * radius;
      return area
    }
  }