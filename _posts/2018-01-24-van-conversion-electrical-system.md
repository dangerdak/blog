---
title: Van conversion electrical system
layout: post
---

_This project is currently in the planning stage and is a work in progress - I'll keep
updating this post as my plan progresses until the system is installed_

Fiddling with wiring in a van is intimidating, but after reading the
encouraging words of lots of people on the internet, I decided to give it a go. This post
covers my plan for installing a leisure battery and solar panel system into a Renault
Trafic 2015 campervan conversion.

To get started, these resources are really useful:
1. [GnomadHome - Epic Guide to Van Build
Electrical](https://gnomadhome.com/van-build-solar-electrical-wiring/)
2. [VanDogTraveller - From Van to Home - Chapter 'Electrical
   System'](http://vandogtraveller.com/van-conversion-book-from-van-to-home/) - costs £10 for the book but it's detailed and very helpful for all aspects
     of the conversion
3. [Travelvolts - advice and suggestions](https://www.travelvolts.net/) - general
   advice and also really helpful with questions so I bought most of my
   electrical system from here
4. [SBMCC membership](http://forum-sbmcc.co.uk/) - A really helpful forum. I'm
   going to post my final electrical plan here to ask people to look it over
   and check for any issues. Costs £15 per year


## Sizing the system
This is hard to do! I tried making a spreadsheet but I'm not sure how helpful
it was - there's so much guesswork involved. In the end I decided to just listen to general advice/impressions I got
from reading around:
- A 100/110ah battery is reasonable/ seems standard for a smallish system
- 35ah per day would be very modest usage, 120ah per day would be living like you do at home (remember the battery shouldn't be depleted past 50% and you probably want it to last at least a couple days on a charge)
- Expect a 110ah battery to last 2-3 days running a compressor fridge and other smaller power consumers

## Choosing components
I was looking to keep the system fairly modest - mostly it'll be running LEDs
and a small compressor fridge + usb sockets for phone charging. I also wanted
to keep it reasonably light.

### Battery
The hardest thing here is choosing the right capacity - I decided on
a 130ah battery so I can squeeze out a bit more compared to the more standard 100ah
batteries, but I didn't want to get 2 expensive, heavy batteries if I might
not need them both.

Following travelvolts suggestion, I decided to get an AGM battery as my van has
a smart alternator so I needed to get a smart battery to battery charger
anyway, allowing for efficient charging of AGM batteries. This also meant
I could install the battery on it's side so it would fit under the
passenger seat.

### B2B charger
Here I was choosing between the Ctek Dual 250SA, the Ring RSCDC30 and the Redarc
1225-LV. These all have an MPPT solar charger included and are similar prices.
When I was looking Ring were having some issues reported with their charger.
I settled on the Redarc as advised by travelvolts as Redarc is Renault
approved.

These smart B2B chargers also require an ignition switch feed when used with
smart alternators, so they know when the engine's running. This can be obtained
from the car's fusebox, using a piggyback fuse adaptor.

In the 2015 Trafic this is located inside the glove box.

### Fridge
Compressor fridges are the most efficient so the type of fridge was easy. Other
than this I figured a reputable brand was the best I could do so I went with
a Dometic CF26 21L fridge. Big enough to fit a few beers and some cheese, but
I was also considering the space it will take up and the lower power usage of
smaller fridges.

### Solar
As a rough guide, the wattage of your solar panels should be around the ah
capacity of your batteries. I'm planning to get either 130W or 150W panels to
go with my 130ah battery.

## Wiring diagram
I made a start on drawing out how everything will fit together:
[![electrical system wiring plan]({{ "/img/van-wiring.png" | relative_url }})]({{ "/img/van-wiring.png" | relative_url }})
Still need to work out a few details about fuses, wire lengths and gauges and earthing.

## Fuses and wire sizing
Fuses are there primarily to protect the wires from excessive current, rather than the
components/appliances. This is because if too much current runs through a wire
it can cause a fire. So the rating of each fuse should be less
than what the wire can handle. A voltage drop of 3% is generally considered
acceptable (0.36V in a 12V system). Here's a tool to help calculate
appropriate [wire sizing](http://www.antares.co.uk/design-tools.html). Remember
the length includes both the negative and the positive side of the circuit.

## More details
### Determining if the van has a smart alternator
...
