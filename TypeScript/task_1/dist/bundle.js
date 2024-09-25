/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var teacher3 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false
};
var director1 = {
    firstName: 'The',
    lastName: 'Batman',
    location: 'Gotham',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQTJCRTtJQUlFLHNCQUFZLEVBQWdEO1lBQTlDLFNBQVMsaUJBQUUsUUFBUTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQWM7SUFDM0IsU0FBUyxFQUFFLEtBQUs7SUFDaEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixlQUFlLEVBQUUsRUFBRTtDQUNwQixDQUFDO0FBSUYsSUFBTSxZQUFZLEdBQXlCLFVBQUMsU0FBaUIsRUFBRSxRQUFnQjtJQUM3RSxPQUFPLFVBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBSyxRQUFRLENBQUUsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUFFSixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRlYWNoZXIge1xuICAgIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcbiAgICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xuICB9XG5cbiAgaW50ZXJmYWNlIERpcmVjdG9ycyBleHRlbmRzIFRlYWNoZXIge1xuICAgIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xuICB9XG5cbiAgaW50ZXJmYWNlIHByaW50VGVhY2hlckZ1bmN0aW9uIHtcbiAgICAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG4gIH1cblxuICBpbnRlcmZhY2UgU3R1ZGVudENsYXNzQ29uc3RydWN0b3Ige1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lIDogc3RyaW5nO1xuICB9XG5cbiAgaW50ZXJmYWNlIFN0dWRlbnRDbGFzcyB7XG4gICAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nO1xuICAgIGRpc3BsYXlOYW1lKCk6IHN0cmluZztcbiAgfVxuXG4gIGNsYXNzIFN0dWRlbnRDbGFzcyBpbXBsZW1lbnRzIFN0dWRlbnRDbGFzcyB7XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHsgZmlyc3ROYW1lLCBsYXN0TmFtZSB9OiBTdHVkZW50Q2xhc3NDb25zdHJ1Y3Rvcikge1xuICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG4gICAgfVxuXG4gICAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnQ3VycmVudGx5IHdvcmtpbmcnO1xuICAgIH1cblxuICAgIGRpc3BsYXlOYW1lKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdGVhY2hlcjM6IFRlYWNoZXIgPSB7XG4gICAgZmlyc3ROYW1lOiAnSm9obicsXG4gICAgbGFzdE5hbWU6ICdEb2UnLFxuICAgIGZ1bGxUaW1lRW1wbG95ZWU6IGZhbHNlLFxuICAgIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgICBjb250cmFjdDogZmFsc2VcbiAgfTtcblxuICBjb25zdCBkaXJlY3RvcjE6IERpcmVjdG9ycyA9IHtcbiAgICBmaXJzdE5hbWU6ICdUaGUnLFxuICAgIGxhc3ROYW1lOiAnQmF0bWFuJyxcbiAgICBsb2NhdGlvbjogJ0dvdGhhbScsXG4gICAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcbiAgICBudW1iZXJPZlJlcG9ydHM6IDE3LFxuICB9O1xuXG5cblxuICBjb25zdCBwcmludFRlYWNoZXI6IHByaW50VGVhY2hlckZ1bmN0aW9uID0gKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gYCR7Zmlyc3ROYW1lLmNoYXJBdCgwKX0uICR7bGFzdE5hbWV9YDtcbiAgfTtcblxuY29uc29sZS5sb2codGVhY2hlcjMpO1xuY29uc29sZS5sb2coZGlyZWN0b3IxKTtcbmNvbnNvbGUubG9nKHByaW50VGVhY2hlcihcIkpvaG5cIiwgXCJEb2VcIikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9