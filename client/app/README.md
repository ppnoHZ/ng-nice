# Form表单验证

## Form的属性

> form.$submitted 表示表单是否已经提交过。type=submit 按钮点击之后触发。


## ngModelOptions

> updateOn 
>>设置更新model的事件 可以多选，使用空格隔开，默认的事件是 default如：   ng-model-options="{updateOn:'default blur'}"

    ```html
            <input bf-field-error type="email" id="_email" ng-model-options="{updateOn:'blur'}" required ng-model="vm.form.email">
    ```

> debounce 
>>设置延迟更新model的时间。可以为整数 如： debounce:1000，表示1秒后更新model,可以为对象 如：debounce:{'default':1000,'blur':500} 分别对事件赋值。
    ```html
            <input bf-field-error type="email" id="_email" ng-model-options="{updateOn:'blur',debounce:}" required ng-model="vm.form.email">
    ```

> allowInvalid  详见文档

> getterSetter 详见文档

> timezone 时区 如 ： timezone:"+0430"  详见文档
    