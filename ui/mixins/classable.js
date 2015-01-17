var React = require('react/addons');
var classSet = React.addons.classSet;
module.exports = {
    getClasses: function(initialClasses, cleanClasses) {
        var classString = '';

        // Initialize the classString with the classNames that were passed in
        if (this.props.className) {
            classString += ' ' + this.props.className;
        }

        // Add in initial classes
        if (typeof initialClasses === 'object') {
            classString += ' ' + classSet(initialClasses);
        } else {
            classString += ' ' + initialClasses;
        }
        var classArray = this.getClassSet(classString);
        if(cleanClasses){
            cleanClasses.split(' ').forEach(function(className) {
                classArray[className]=false;
            });
        }

        // Convert the class string into an object and run it through the class set
        return classSet(classArray);
    },

    getClassSet: function(classString) {
        var classObj = {};
        if (classString) {
            classString.split(' ').forEach(function(className) {
                if (className) {
                    classObj[className] = true;
                }
            });
        }
        return classObj;
    }
};
