# Strategies for carrying out testing

## Gotta test 'em all?

在所有的设备和浏览器上都进行测试是不可能的，因此要确保应用在主要目标平台和设备上工作正常。

除此之外，要尽可能保证代码的向下兼容性。

策略：准备一个浏览器分级表：

1. A grade: Common/modern browsers — Known to be capable. Test thoroughly and provide full support.
2. B grade: Older/less capable browsers — known not to be capable. Test, and provide a more basic experience that gives full access to core information and services.
3. C grade: Rare/unknown browsers — don't test, but assume they are capable. Serve the full site, which should work, at least with the fallbacks provided by our defensive coding.

参考资料：[Yahoo's Graded Browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support)

## What are you going to test?

在开发完成一个新功能后，不要急着测试。先把测标准列出来，包括视觉目标和功能目标。

这些测试标准可以帮助你：

1. 一系列可执行的测试步骤
2. 给自动化测试提供基础

## Putting together a testing lab

开发者是程序的第一个测试人员，确保你手里有一系列测试设备。

### 物理设备

- MAC：包括 Firefox, Chrome, Opera, Safari, Edge, IE
- Windows: 包括 Firefox, Chrome, Opera, Safari, Edge, IE
- 安卓手机和安卓平板： 包括 Firefox, Chrome, Opera, Safari, Edge, IE
- iPhone: 包括 Firefox, Chrome, Opera, Safari, Edge, IE

### 模拟器

主流浏览器都提供了这个功能，除此之外，还有：

- [Android Studio IDE](https://developer.android.com/studio/)
- [Andy](https://www.andyroid.net/)

### Virtual machines

- VMWare
- Virtual Box

### 自动化测试

- [Mocha](https://mochajs.org/)
- [Selenium](https://www.selenium.dev/)
- [Sauce Labs](https://saucelabs.com)
- [Browser Stack](https://www.browserstack.com)
- [Lambda Test](https://www.lambdatest.com)

## User testing

人力手工测试
