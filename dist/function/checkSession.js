/**
 * @file arhat function checkSession
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = checkSession;
function checkSession() {
    return new Promise(function (resolve, reject) {
        wx.checkSession({
            success: function success() {
                resolve(true);
            },
            fail: function fail() {
                reject(false);
            }
        });
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrU2Vzc2lvbi5qcyJdLCJuYW1lcyI6WyJjaGVja1Nlc3Npb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInd4Iiwic3VjY2VzcyIsImZhaWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztrQkFFd0JBLFk7QUFBVCxTQUFTQSxZQUFULEdBQXdCO0FBQ25DLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0MsV0FBR0osWUFBSCxDQUFnQjtBQUNaSyxxQkFBUyxtQkFBWTtBQUNqQkgsd0JBQVEsSUFBUjtBQUNILGFBSFc7QUFJWkksa0JBQU0sZ0JBQVk7QUFDZEgsdUJBQU8sS0FBUDtBQUNIO0FBTlcsU0FBaEI7QUFRSCxLQVRNLENBQVA7QUFVSCIsImZpbGUiOiJjaGVja1Nlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlIGFyaGF0IGZ1bmN0aW9uIGNoZWNrU2Vzc2lvblxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrU2Vzc2lvbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3eC5jaGVja1Nlc3Npb24oe1xuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG4iXX0=