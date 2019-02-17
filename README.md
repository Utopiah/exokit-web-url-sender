# exokit-web-url-sender
Avoiding having to use the CLI (or even Windows) to try content on the ML1

![](https://fabien.benetou.fr/pub/home/WebARFOSDEM2019/nocli.gif)

Video demo https://www.youtube.com/watch?v=PnI-xoSIEDs

This simple tool is to be managed by the workshop lead, not participants. Participants only have to connect to the webpage to get their content loaded on the connected ML1.

1. install mldb.exe from Magic Leap (note that the SDK is optional)
1. clone this repository
1. `npm install`
1. edit `index.js` to fix your `mldb.exe` path 
1. `node index.js`
1. open in a browser http://127.0.0.1:8080 (or your IP address)
1. share that URL to workshop participants

## To improve
- distinct configuration file
- manage over TCP by providing an IP address
- integrate directly in exokit
- better error handling
- managing blocking to enable multiple users to avoid overlap
- security check (obviously, now somebody could delete the entire disk...)
