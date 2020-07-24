var Vehiculo = /** @class */ (function () {
    function Vehiculo(color, marca, velocidadMaxima, precio) {
        this._color = color;
        this._marca = marca;
        this._velocidadMaxima = velocidadMaxima;
        this._precio = precio;
    }
    Object.defineProperty(Vehiculo.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (value) {
            this._marca = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "velocidadMaxima", {
        get: function () {
            return this._velocidadMaxima;
        },
        set: function (value) {
            this._velocidadMaxima = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "precio", {
        get: function () {
            return this._precio;
        },
        set: function (value) {
            this._precio = value;
        },
        enumerable: false,
        configurable: true
    });
    return Vehiculo;
}());
export { Vehiculo };
