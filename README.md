# MMM-YouTube-API
This a module for the [MagicMirror](https://github.com/MichMich/MagicMirror/tree/develop). It helps you easily implement YouTube videos to be played in your MagicMirror by using YouTube's own iFrame API.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
    {
		module: 'MMM-YouTube-API',
		position: 'top_center',
                config: {
                    //Config here
                }
    }
]
````

|Option|Description|
|---|---|
|`width`|The width of the video.<br><br>**Default value:** `640`<br>|
|`height`|The height of the video.<br><br>**Default value:** `360`<br>|
|`videoID`|The YouTube video ID.<br><br>**Example:**<br>&nbsp;&nbsp;Link: https://www.youtube.com/watch?v=Sagg08DrO5U<br>&nbsp;&nbsp;Id: `Sagg08DrO5U`<br><br>**Default value:** `Sagg08DrO5U`<br>|
|`playbackRate`|The rate at which the video plays.<br><br>**Valid values:** `0.25`, `0.5`, `1`, `1.5`, `2`<br><br>**Default value:** `1`<br>|
|`volume`|The playback volume of the selected video.<br><br>**Valid values:** `0 - 100`<br><br>**Default value:** `100`<br>|
|`loop`|Should the video loop?<br><br>**Valid values:** `true` or `false`<br><br>**Default value:** `true`<br>|

<br><br>Made in collaboration with my dear friend **Alfred**
