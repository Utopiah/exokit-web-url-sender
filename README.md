# exokit-web-url-sender
Avoiding having to use the CLI (or even Windows) to try content on the ML1

![](https://fabien.benetou.fr/pub/home/WebARFOSDEM2019/nocli.gif)

![](https://pbs.twimg.com/media/DzoOyFyXQAA50iK.png:large)

Video demo https://www.youtube.com/watch?v=PnI-xoSIEDs

This simple tool is to be managed by the workshop lead, not participants. Participants only have to connect to the webpage to get their content loaded on the connected ML1.

1. install mldb.exe from Magic Leap (note that the SDK is optional)
1. clone this repository
1. `npm install`
1. edit `index.js` to fix your `mldb.exe` path 
1. `npm run start`
1. open in a browser http://127.0.0.1:8080 (or your IP address)
1. share that URL to workshop participants
1. optionally share instead the code snippet to participants to have a send to ML button (make sure it's with the remote IP address)

## Details on code snippet embedding
- share a code snippet accessible from the participant machine e.g. `<script src="http://192.168.1.10:8080/snippet.js"></script>`
not `<script src="http://127.0.0.1:8080/snippet.js"></script>` or `<script src="http://localhost:8080/snippet.js"></script>`.
- double check that your firewall is not blocking the connection which is the case by default with Windows Linux Subsystem.
- if you do not provide https access (currently the case) then visit the hosting page in http to avoid blocked content

## To improve
- distinct configuration file
- manage over TCP by providing an IP address
- integrate directly in exokit
- better error handling
- managing blocking to enable multiple users to avoid overlap
- security check (obviously, now somebody could delete the entire disk...)
Cf TODO.md for more.
