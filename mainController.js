function mainController($scope) {

    $scope.new = {}

    $scope.contacts = []

    $scope.add = function() {
        $scope.contacts.push($scope.new);
        $scope.new = {};
    }

    $scope.delete = function(contact) {
        $scope.contacts.splice(contact, 1)
    }

}
