## Mercury URL Parser for Zeit Now

- [Mercury Parser](https://github.com/postlight/mercury-parser) extracts structured information from a URL.
- [Now](https://zeit.co/now) is a really good serverless deployment platform. The free tier will allow 1000 calls per day for $0 per month, no credit card required.

## Guide
1. [Setup Github integration for Now](https://zeit.co/github-setup). This will look for a `now.json` file in your Github repos and deploy to `Now` after a push.
2. Fork this repo to deploy 🎉
3. That's it! 🤯 `Now` will give you a URL that will look a bit like https://page-parser.beyonceknowles.now.sh. So if you want to parse [this](https://www.bbc.co.uk/news/world-europe-48198755) odd story about a speeding pigeon then you would call `https://page-parser.beyonceknowles.now.sh/https://www.bbc.co.uk/news/world-europe-48198755` and get a response as follows:

```json
{
    "title": "Speeding pigeon caught on German camera goes viral",
    "author": null,
    "date_published": null,
    "dek": null,
    "lead_image_url": "https://ichef.bbci.co.uk/news/1024/branded_news/112DB/production/_106836307_taube.jpg",
    "content": "<div class=\"story-body__inner\"> <figure class=\"media-landscape has-caption full-width lead\"> <span class=\"image-and-copyright-container\"> <img class=\"js-image-replace\" alt=\"Pigeon caught on camera\" src=\"https://ichef.bbci.co.uk/news/320/cpsprodpb/112DB/production/_106836307_taube.jpg\" width=\"976\"> <span class=\"off-screen\">Image copyright</span> <span class=\"story-image-copyright\">Stadt Bocholt</span> </span> <figcaption class=\"media-caption\"> <span class=\"off-screen\">Image caption</span> <span class=\"media-caption__text\"> Town authorities said the pigeon had been &quot;on a collision course with vehicles or pedestrians&quot; </span> </figcaption> </figure><p class=\"story-body__introduction\">It was a quiet afternoon in Bocholt in western Germany when a pigeon broke the calm and the speed limit, flying down a residential street at 45km/h (28mph) in a 30km/h zone.</p><p>A mobile speed camera flashed as soon as the pigeon flew past.</p><p>Authorities in the town, a short distance from the Dutch border, published the picture last week, and it has since gone viral.</p><p>Under normal circumstances the penalty for speeding would be &#x20AC;25 (&#xA3;21;$28).</p><p>The bizarre event took place in February but <a href=\"https://www.facebook.com/bocholt.city/posts/2168096666559731\" class=\"story-body__link-external\">Bocholt town hall&apos;s Facebook account said it had taken some time to assess the pictures</a>.</p><p>The town said that even with a 3km/h margin allowed in speeding cases, the pigeon had been going 12km/h too fast and was &quot;on a collision course with vehicles and pedestrians&quot;.</p><p>One local said it was clearly a racing pigeon, while another suggested an appropriate punishment would be community service as a carrier pigeon.</p><p>The Bocholt Facebook page said philosophically: &quot;Whether and, above all, how the fast bird can and will pay its &#x20AC;25 on-the-spot fine remains to be seen.&quot;</p> </div>",
    "next_page_url": null,
    "url": "https://www.bbc.co.uk/news/world-europe-48198755",
    "domain": "www.bbc.co.uk",
    "excerpt": "The bird was flashed by speed radar travelling 15km/h over the speed limit in the town of Bocholt.",
    "word_count": 194,
    "direction": "ltr",
    "total_pages": 1,
    "rendered_pages": 1
}
```

