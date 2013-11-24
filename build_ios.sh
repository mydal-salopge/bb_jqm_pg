#!/bin/bash
lessc www/css/landing.less > www/css/landing.css
cordova build ios
