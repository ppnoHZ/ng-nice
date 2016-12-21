#filter
ng-repate 过滤

ng-repeat="item in vm.items |filter:vm.filter"

如果vm.filter 是字符串则是针对数组中所有字符串类型的属性进行匹配。可以是“!“来表示非操作。

如果vm.filte 是对象：可以针对指定的字段进行过滤。{}

vm.filter 有个$ 属性。{"$":"dss"}表示对同一级别的属性或者更深层次的属性进行匹配
如：{name:{first:'zhou',last:'dd'}}   {name:'zhoud'} 匹配不到  {$:'zhou'}则可以匹配到。