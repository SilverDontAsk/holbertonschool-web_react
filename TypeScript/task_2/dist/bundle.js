/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
    throw new Error("Class does not exist");
}
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
teachClass('Math');
teachClass('History');

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWVBO0lBQUE7SUFZRSxDQUFDO0lBWEMsK0JBQVksR0FBWjtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDRSxPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDRSxPQUFPLDJCQUEyQixDQUFDO0lBQ3JDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFZQSxDQUFDO0lBWEMsOEJBQVksR0FBWjtRQUNFLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDRSxPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzdDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUMvQyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7SUFDeEIsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxRQUE0QjtJQUM5QyxPQUFRLFFBQXFCLENBQUMsaUJBQWlCLEtBQUssU0FBUyxDQUFDO0FBQ2hFLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxRQUE0QjtJQUMvQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDdEMsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsVUFBb0I7SUFDdEMsSUFBSSxVQUFVLEtBQUssTUFBTSxFQUFFLENBQUM7UUFDMUIsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztTQUFNLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQ3BDLE9BQU8sa0JBQWtCLENBQUM7SUFDNUIsQ0FBQztJQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRUQsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNsQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkIsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxudHlwZSBTdWJqZWN0cyA9IFwiTWF0aFwiIHwgXCJIaXN0b3J5XCI7XG5cbmludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xuICB9XG5cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbiAgfVxuXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnV29ya2luZyBmcm9tIGhvbWUnO1xuICAgIH1cbiAgXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnR2V0dGluZyBhIGNvZmZlZSBicmVhayc7XG4gICAgfVxuICBcbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzJztcbiAgICB9XG4gIH1cblxuICBjbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ0Nhbm5vdCB3b3JrIGZyb20gaG9tZSc7XG4gICAgfVxuICBcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdDYW5ub3QgaGF2ZSBhIGJyZWFrJztcbiAgICB9XG4gIFxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9yIHwgVGVhY2hlciB7XG4gICAgaWYgKHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCkge1xuICAgICAgcmV0dXJuIG5ldyBUZWFjaGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG4gICAgcmV0dXJuIChlbXBsb3llZSBhcyBEaXJlY3Rvcikud29ya0RpcmVjdG9yVGFza3MgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBzdHJpbmcge1xuICAgIGlmIChpc0RpcmVjdG9yKGVtcGxveWVlKSkge1xuICAgICAgcmV0dXJuIGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGVhY2hDbGFzcyh0b2RheUNsYXNzOiBTdWJqZWN0cyk6IHN0cmluZyB7XG4gICAgaWYgKHRvZGF5Q2xhc3MgPT09IFwiTWF0aFwiKSB7XG4gICAgICByZXR1cm4gXCJUZWFjaGluZyBNYXRoXCI7XG4gICAgfSBlbHNlIGlmICh0b2RheUNsYXNzID09PSBcIkhpc3RvcnlcIikge1xuICAgICAgcmV0dXJuIFwiVGVhY2hpbmcgSGlzdG9yeVwiO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDbGFzcyBkb2VzIG5vdCBleGlzdFwiKTtcbiAgfVxuXG4gIGV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDIwMCkpO1xuICBleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgxMDAwKSk7XG4gIHRlYWNoQ2xhc3MoJ01hdGgnKTtcbiAgdGVhY2hDbGFzcygnSGlzdG9yeScpO1xuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=