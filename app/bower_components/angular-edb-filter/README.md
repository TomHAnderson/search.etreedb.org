Angular edbFilter
=================

This is a data mining tool built in symmetry with [zfcampus/zf-doctrine-querybuilder](https://github.com/zfcampus/zf-doctrine-querybuilder)
and in symmmetry with [zfcampus/zf-apigility-doctrine](https://github.com/zfcampus/zf-apigility-doctrine).
As an Angular directive edbFilter provides a filtering form:

```html
<edb-filter field="bucket" alias="row">Bucket</edb-filter>
```

Closed (toggled by filter icon)

![edbFilter closed](https://raw.githubusercontent.com/API-Skeletons/angular-edb-filter/master/media/closed.png)

Open

![edbFilter open](https://raw.githubusercontent.com/API-Skeletons/angular-edb-filter/master/media/open.png)

Filters

![edbFilter filters](https://raw.githubusercontent.com/API-Skeletons/angular-edb-filter/master/media/filters.png)


An edbFilter requires two `$parent` level functions, `filter()` and `orderBy()`.


`filter` and `orderBy` functions
--------------------------------

```js
  $scope.filter = function(filter)
  {
    $scope.query.filter.unshift(filter);
    $scope.load(API_URL + '/zf-apigility-doctrine-resource?' + $.param($scope.query));
  }

  $scope.orderBy = function(filter)
  {
    $scope.query["order-by"].unshift(filter);
    $scope.load(API_URL + '/zf-apigility-doctrine-resource?' + $.param($scope.query));
  }
```

The global scoped `query` is a list of filter objects.  It may be pre-populated with filter criteria before edbFilter is allowed to add
to it.

Preloaded `$query`
------------------
```js
$scope.init = function() {
  $scope.query = {
    "order-by": [],
    filter: [
      {
        type: 'innerjoin',
        field: 'status',
        alias: 'status'
      }
    ]
  };

  $scope.load(API_URL + '/zf-apigility-doctrine-resource?' + $.param($scope.query));
}
```

The `$scope.load` function is simple and by taking a url it provides direct queries of pagination links in the HAL _links array.
```js
  $scope.load = function(url) {
    $http({
        method: 'get',
        url: url ,
        headers: {
          'Authorization': 'Bearer ' + AccessToken.get().access_token
        }
    }).success(function(data) {
      $scope.data = data;
    });
  }
```