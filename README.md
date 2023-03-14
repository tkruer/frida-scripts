# frida-scripts

- Some Frida scripts I use for iOS SSL Unpinning. As of now, these all should work on iOS 15.7.2 and should be able to unpin all the apps listed in this repo.
- If something isn't working, please open an issue and I'll try to fix it as soon as possible.

## Usage

- iOS device needs to be jailbroken. Frida must be installed on the device as well. (https://frida.re/docs/ios/)
	
To run, run the following command:
```frida -U -f <BUNDLE.IDENTIFIER> <SCRIPT>```