# Reactbus
> A bus timing (Singapore) web-app made using React

## Why not use an app?
>   Imagine a situaion where you have forgotten to download the bus-timing app, You will have to spend your mobile data on downloading the app. However this web-app tries to use as little data as possible to save on your mobile data (or wifi). It can be used temporary or permanent, however you like it.

## API(s) used:
-   ArriveLah (https://arrivelah.herokuapp.com)

# Color-Coded Guide
The arrival timing text will have 4 color coded text containing the arrival timing and also the type of bus. It ranges from `Green` to `Purple`, from Seats Available to Unknown Info.

-   `Green`
    -   Seating is Available in the Bus
-   `Yellow`
    -   Standing is Available, Seats are very limited / not available
-   `Red`
    -   Standing is very limited. Seats may or may not be available.
-   `Purple`
    -   Unknown (their arrival time, and / or the type)

### I am trying my best to catch all the little bugs and major bugs, but sometimes, I can miss that specific bug, If you see a bug, please open an issue at the `issues` tab. Please include steps to reproduce it and the bus stop code you are trying to get the timings of.

# Bus Type Guide
The arrival timing text will be in the format of: `<timing> <type>`, as of version `2.1.6-rc1`, The text of the type will be straight from the API. There are a total of 3 types of bus types.

-   `SD`
    -   Single-Deck Bus
-   `DD`
    -   Double-Deck Bus
-   `BD`
    -   Bendy Bus

#### Mobile Friendly Confirmed :)