
- react中 class 里面设置 static defaultProps报错
 + 如果babel设置为es6的转码方式，会报错，因为定义静态属性不属于es6，而在es7的草案中。ES6的class中只有静态方法，没有静态属性。可以使用
 + 方法 1
 ```
 ClassName.defaultProps = {
     key : value
 }
 ```
 + 方法 2
 babel中配置es7--> stage-0

    ```
    // Install babel
    npm install babel-core babel-loader --save-dev

    // For ES6/ES2015 support
    npm install babel-preset-es2015 --save-dev

    // If you want to use JSX
    npm install babel-preset-react --save-dev

    // If you want to use experimental ES7 features
    npm install babel-preset-stage-0 --save-dev
    ```

 .babelrc
 ```
 {
  "presets": ["es2015", "stage-0"],
  "plugins": ["transform-runtime"]
 }
 ```

 - 
