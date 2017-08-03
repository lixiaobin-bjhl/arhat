'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberInput = function (_wepy$component) {
    _inherits(NumberInput, _wepy$component);

    function NumberInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NumberInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            minusStatus: 'disabled'
        }, _this.props = {
            num: {
                type: Number,
                default: 1,
                twoWay: true
            }
        }, _this.methods = {
            /**
             * 点击减号 
             */
            bindMinus: function bindMinus() {
                var num = this.num;
                if (num > 1) {
                    num--;
                }
                // 只有大于一件的时候，才能normal状态，否则disable状态
                var minusStatus = num <= 1 ? 'disabled' : 'normal';
                // 将数值与状态写回
                this.num = num;
                this.minusStatus = minusStatus;
            },

            /**
             * 点击加号 
             */
            bindPlus: function bindPlus() {
                var num = this.num;
                // 不作过多考虑自增1
                num++;
                // 只有大于一件的时候，才能normal状态，否则disable状态
                var minusStatus = num < 1 ? 'disabled' : 'normal';
                // 将数值与状态写回
                this.num = num;
                this.minusStatus = minusStatus;
            },

            /**
             * 输入框事件
             */
            bindManual: function bindManual(e) {
                var num = e.detail.value;
                this.num = num;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return NumberInput;
}(_wepy2.default.component);

exports.default = NumberInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bWJlcklucHV0LmpzIl0sIm5hbWVzIjpbIk51bWJlcklucHV0IiwiZGF0YSIsIm1pbnVzU3RhdHVzIiwicHJvcHMiLCJudW0iLCJ0eXBlIiwiTnVtYmVyIiwiZGVmYXVsdCIsInR3b1dheSIsIm1ldGhvZHMiLCJiaW5kTWludXMiLCJiaW5kUGx1cyIsImJpbmRNYW51YWwiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztvTUFDakJDLEksR0FBTztBQUNUQyx5QkFBYTtBQURKLFMsUUFJUEMsSyxHQUFRO0FBQ0pDLGlCQUFLO0FBQ0RDLHNCQUFNQyxNQURMO0FBRURDLHlCQUFTLENBRlI7QUFHREMsd0JBQVE7QUFIUDtBQURELFMsUUFRUkMsTyxHQUFVO0FBQ047OztBQUdBQyxxQkFKTSx1QkFJTztBQUNULG9CQUFJTixNQUFNLEtBQUtBLEdBQWY7QUFDQSxvQkFBSUEsTUFBTSxDQUFWLEVBQWE7QUFDVEE7QUFDSDtBQUNEO0FBQ0Esb0JBQUlGLGNBQWNFLE9BQU8sQ0FBUCxHQUFXLFVBQVgsR0FBd0IsUUFBMUM7QUFDQTtBQUNBLHFCQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxxQkFBS0YsV0FBTCxHQUFtQkEsV0FBbkI7QUFDSCxhQWRLOztBQWVOOzs7QUFHQVMsb0JBbEJNLHNCQWtCTTtBQUNSLG9CQUFJUCxNQUFNLEtBQUtBLEdBQWY7QUFDQTtBQUNBQTtBQUNBO0FBQ0Esb0JBQUlGLGNBQWNFLE1BQU0sQ0FBTixHQUFVLFVBQVYsR0FBdUIsUUFBekM7QUFDQTtBQUNBLHFCQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxxQkFBS0YsV0FBTCxHQUFtQkEsV0FBbkI7QUFDSCxhQTNCSzs7QUE0Qk47OztBQUdBVSx3QkFBWSxvQkFBU0MsQ0FBVCxFQUFZO0FBQ3BCLG9CQUFJVCxNQUFNUyxFQUFFQyxNQUFGLENBQVNDLEtBQW5CO0FBQ0EscUJBQUtYLEdBQUwsR0FBV0EsR0FBWDtBQUNIO0FBbENLLFM7Ozs7RUFiMkIsZUFBS1ksUzs7a0JBQXpCaEIsVyIsImZpbGUiOiJudW1iZXJJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXJJbnB1dCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgZGF0YSA9IHtcblx0XHQgICAgbWludXNTdGF0dXM6ICdkaXNhYmxlZCdcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgbnVtOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDEsXG4gICAgICAgICAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDngrnlh7vlh4/lj7cgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGJpbmRNaW51cyAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG51bSA9IHRoaXMubnVtO1xuICAgICAgICAgICAgICAgIGlmIChudW0gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bSAtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g5Y+q5pyJ5aSn5LqO5LiA5Lu255qE5pe25YCZ77yM5omN6IO9bm9ybWFs54q25oCB77yM5ZCm5YiZZGlzYWJsZeeKtuaAgVxuICAgICAgICAgICAgICAgIHZhciBtaW51c1N0YXR1cyA9IG51bSA8PSAxID8gJ2Rpc2FibGVkJyA6ICdub3JtYWwnO1xuICAgICAgICAgICAgICAgIC8vIOWwhuaVsOWAvOS4jueKtuaAgeWGmeWbnlxuICAgICAgICAgICAgICAgIHRoaXMubnVtID0gbnVtO1xuICAgICAgICAgICAgICAgIHRoaXMubWludXNTdGF0dXMgPSBtaW51c1N0YXR1cztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOeCueWHu+WKoOWPtyBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYmluZFBsdXMgKCkge1xuICAgICAgICAgICAgICAgIHZhciBudW0gPSB0aGlzLm51bTtcbiAgICAgICAgICAgICAgICAvLyDkuI3kvZzov4flpJrogIPomZHoh6rlop4xXG4gICAgICAgICAgICAgICAgbnVtICsrO1xuICAgICAgICAgICAgICAgIC8vIOWPquacieWkp+S6juS4gOS7tueahOaXtuWAme+8jOaJjeiDvW5vcm1hbOeKtuaAge+8jOWQpuWImWRpc2FibGXnirbmgIFcbiAgICAgICAgICAgICAgICB2YXIgbWludXNTdGF0dXMgPSBudW0gPCAxID8gJ2Rpc2FibGVkJyA6ICdub3JtYWwnO1xuICAgICAgICAgICAgICAgIC8vIOWwhuaVsOWAvOS4jueKtuaAgeWGmeWbnlxuICAgICAgICAgICAgICAgIHRoaXMubnVtID0gbnVtO1xuICAgICAgICAgICAgICAgIHRoaXMubWludXNTdGF0dXMgPSBtaW51c1N0YXR1cztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi+k+WFpeahhuS6i+S7tlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBiaW5kTWFudWFsOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG51bSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMubnVtID0gbnVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19