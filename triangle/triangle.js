var triangle = {
    isEquilateral: function (a, b, c) {
        if (a != b) return false;
        if (b != c) return false;
        if (a != c) return false;
        if (a <= 0) return false;
        return true;
    },
    isIsosceles: function (a, b, c) {
        if (a + b != c && a - b < c && a + b > c || b - c < a && b + c > a && b + c != a || a + c > b && c - a < b && a + c != b) {
            if (a > 0)
                if (a + b > c)
                    if (a == b && a != c || b == c && b != a || a == c && a != b)
                        return true;
        }
        return false;
    },
    isScalene: function (a, b, c) {
        if (a + b > c && b + c > a && a + c > b) {
            if (a != b) return true;
            if (b != c) return true;
            if (a != c) return true;
            if (a <= 0) return true;
        }
        if (a == b && a != c || b == c && b != a || a == c && a != b)
            return false;
    }
};

