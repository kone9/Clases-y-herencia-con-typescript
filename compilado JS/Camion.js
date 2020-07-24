var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Vehiculo } from "./Vehiculo.js";
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(color, marca, velocidadMaxima, precio) {
        var _this = _super.call(this, color, marca, velocidadMaxima, precio) || this;
        _this._tieneAcoplado = false;
        return _this;
    }
    Object.defineProperty(Camion.prototype, "tieneAcoplado", {
        get: function () {
            return this._tieneAcoplado;
        },
        set: function (value) {
            this._tieneAcoplado = value;
        },
        enumerable: false,
        configurable: true
    });
    Camion.prototype.soyUnCamion = function () {
        return "soy un camion";
    };
    return Camion;
}(Vehiculo));
export { Camion };
