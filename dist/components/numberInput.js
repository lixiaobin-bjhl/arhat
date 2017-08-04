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
            },

            getNum: function getNum() {
                return this.num;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return NumberInput;
}(_wepy2.default.component);

exports.default = NumberInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bWJlcklucHV0LmpzIl0sIm5hbWVzIjpbIk51bWJlcklucHV0IiwiZGF0YSIsIm1pbnVzU3RhdHVzIiwicHJvcHMiLCJudW0iLCJ0eXBlIiwiTnVtYmVyIiwiZGVmYXVsdCIsInR3b1dheSIsIm1ldGhvZHMiLCJiaW5kTWludXMiLCJiaW5kUGx1cyIsImJpbmRNYW51YWwiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJnZXROdW0iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztvTUFDakJDLEksR0FBTztBQUNUQyx5QkFBYTtBQURKLFMsUUFJUEMsSyxHQUFRO0FBQ0pDLGlCQUFLO0FBQ0RDLHNCQUFNQyxNQURMO0FBRURDLHlCQUFTLENBRlI7QUFHREMsd0JBQVE7QUFIUDtBQURELFMsUUFRUkMsTyxHQUFVO0FBQ047OztBQUdBQyxxQkFKTSx1QkFJTztBQUNULG9CQUFJTixNQUFNLEtBQUtBLEdBQWY7QUFDQSxvQkFBSUEsTUFBTSxDQUFWLEVBQWE7QUFDVEE7QUFDSDtBQUNEO0FBQ0Esb0JBQUlGLGNBQWNFLE9BQU8sQ0FBUCxHQUFXLFVBQVgsR0FBd0IsUUFBMUM7QUFDQTtBQUNBLHFCQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxxQkFBS0YsV0FBTCxHQUFtQkEsV0FBbkI7QUFDSCxhQWRLOztBQWVOOzs7QUFHQVMsb0JBbEJNLHNCQWtCTTtBQUNSLG9CQUFJUCxNQUFNLEtBQUtBLEdBQWY7QUFDQTtBQUNBQTtBQUNBO0FBQ0Esb0JBQUlGLGNBQWNFLE1BQU0sQ0FBTixHQUFVLFVBQVYsR0FBdUIsUUFBekM7QUFDQTtBQUNBLHFCQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxxQkFBS0YsV0FBTCxHQUFtQkEsV0FBbkI7QUFDSCxhQTNCSzs7QUE0Qk47OztBQUdBVSx3QkFBWSxvQkFBU0MsQ0FBVCxFQUFZO0FBQ3BCLG9CQUFJVCxNQUFNUyxFQUFFQyxNQUFGLENBQVNDLEtBQW5CO0FBQ0EscUJBQUtYLEdBQUwsR0FBV0EsR0FBWDtBQUNILGFBbENLOztBQW9DTlksa0JBcENNLG9CQW9DSTtBQUNOLHVCQUFPLEtBQUtaLEdBQVo7QUFDSDtBQXRDSyxTOzs7O0VBYjJCLGVBQUthLFM7O2tCQUF6QmpCLFciLCJmaWxlIjoibnVtYmVySW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVySW5wdXQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIGRhdGEgPSB7XG5cdFx0ICAgIG1pbnVzU3RhdHVzOiAnZGlzYWJsZWQnXG4gICAgICAgIH1cblxuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIG51bToge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAxLFxuICAgICAgICAgICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog54K55Ye75YeP5Y+3IFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBiaW5kTWludXMgKCkge1xuICAgICAgICAgICAgICAgIHZhciBudW0gPSB0aGlzLm51bTtcbiAgICAgICAgICAgICAgICBpZiAobnVtID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBudW0gLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOWPquacieWkp+S6juS4gOS7tueahOaXtuWAme+8jOaJjeiDvW5vcm1hbOeKtuaAge+8jOWQpuWImWRpc2FibGXnirbmgIFcbiAgICAgICAgICAgICAgICB2YXIgbWludXNTdGF0dXMgPSBudW0gPD0gMSA/ICdkaXNhYmxlZCcgOiAnbm9ybWFsJztcbiAgICAgICAgICAgICAgICAvLyDlsIbmlbDlgLzkuI7nirbmgIHlhpnlm55cbiAgICAgICAgICAgICAgICB0aGlzLm51bSA9IG51bTtcbiAgICAgICAgICAgICAgICB0aGlzLm1pbnVzU3RhdHVzID0gbWludXNTdGF0dXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDngrnlh7vliqDlj7cgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGJpbmRQbHVzICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbnVtID0gdGhpcy5udW07XG4gICAgICAgICAgICAgICAgLy8g5LiN5L2c6L+H5aSa6ICD6JmR6Ieq5aKeMVxuICAgICAgICAgICAgICAgIG51bSArKztcbiAgICAgICAgICAgICAgICAvLyDlj6rmnInlpKfkuo7kuIDku7bnmoTml7blgJnvvIzmiY3og71ub3JtYWznirbmgIHvvIzlkKbliJlkaXNhYmxl54q25oCBXG4gICAgICAgICAgICAgICAgdmFyIG1pbnVzU3RhdHVzID0gbnVtIDwgMSA/ICdkaXNhYmxlZCcgOiAnbm9ybWFsJztcbiAgICAgICAgICAgICAgICAvLyDlsIbmlbDlgLzkuI7nirbmgIHlhpnlm55cbiAgICAgICAgICAgICAgICB0aGlzLm51bSA9IG51bTtcbiAgICAgICAgICAgICAgICB0aGlzLm1pbnVzU3RhdHVzID0gbWludXNTdGF0dXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDovpPlhaXmoYbkuovku7ZcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYmluZE1hbnVhbDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBudW0gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm51bSA9IG51bTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldE51bSAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==