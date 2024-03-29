import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner;';

export class News extends Component {
  articles=
    [
      {
        "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
        },
        "author": "Karen Langley, Clarence Leong, Anna Hirtenstein",
        "title": "Stocks Fall Sharply After Oil Hits $130 a Barrel - The Wall Street Journal",
        "description": "Dow industrials down more than 700 points; major indexes fall in Europe, Asia",
        "url": "https://www.wsj.com/articles/global-stocks-markets-dow-update-03-07-2022-11646622021",
        "urlToImage": "https://images.wsj.net/im-499346/social",
        "publishedAt": "2022-03-07T20:26:00Z",
        "content": "The Dow Jones Industrial Average dropped more than 700 points, putting the blue-chip gauge on track to enter a correction, as surging oil prices deepened concerns about economic growth.The Dow indust… [+5985 chars]"
      },
      {
        "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
        },
        "author": "Tony Romm",
        "title": "Oil, gas prices surge as Democrats eye aid for Ukraine, punishment against Russia - The Washington Post",
        "description": "The agreement, reached between leaders on House and Senate finance committees, would still need to be approved by the House and Senate.",
        "url": "https://www.washingtonpost.com/us-policy/2022/03/07/congress-ukraine-gas-prices-aid/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/22U7VYE3HAI6ZGMHTXHO4YVD6Y.jpg&w=1440",
        "publishedAt": "2022-03-07T20:09:18Z",
        "content": "In seeking to inflict pain on Russia, however, the U.S. strategy still threatened to have wider economic consequences. Oil and gas prices have spiked as the conflict has intensified, with the nationa… [+8986 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Morning Call"
        },
        "author": "John Misinco",
        "title": "Gas prices set records in Pennsylvania and Lehigh Valley, rising nearly 20 cents over weekend - The Morning Call",
        "description": "Gas prices in Pennsylvania and the Lehigh Valley continued surging over the weekend, breaking the previous records that have stood for nearly 15 years.",
        "url": "https://www.mcall.com/news/breaking/mc-nws-pa-record-gas-prices-20220307-ij4gz3tbrrcxbpn4j4rjbh7cya-story.html",
        "urlToImage": "https://www.mcall.com/resizer/lu3XAHk5wbdnQ-X3A0awYW4fHC4=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/YCOZMZOO7TISREGUCRSVYJQQ6M.jpg",
        "publishedAt": "2022-03-07T19:50:10Z",
        "content": "Gas prices in Pennsylvania and the Lehigh Valley continued surging over the weekend, breaking the previous records that stood for nearly 15 years.\r\nAs of midday Monday, the average price for a gallon… [+824 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Steve Contorno and Carma Hassan, CNN",
        "title": "Florida to recommend against Covid-19 vaccine for healthy children - CNN",
        "description": "The Florida Department of Health will recommend against Covid-19 vaccinations for healthy children, the state's top public health official said Monday, putting the state at odds with the guidance from the US Centers for Disease Control and Prevention.",
        "url": "https://www.cnn.com/2022/03/07/health/florida-covid-19-vaccine-recommendation/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211101161006-covid-19-younger-kids-vaccine-walkup-super-tease.jpg",
        "publishedAt": "2022-03-07T19:26:00Z",
        "content": "(CNN)The Florida Department of Health will recommend against Covid-19 vaccinations for healthy children, the state's top public health official said Monday, putting the state at odds with the guidanc… [+2773 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Post"
        },
        "author": "Reuters",
        "title": "Scientists identify new gene differences in severe COVID patients - New York Post ",
        "description": "The results suggest that people with severe COVID have genes that predispose them to one of two problems: failure to limit the ability of the virus to make copies of itself, or excessive inflammati…",
        "url": "https://nypost.com/2022/03/07/scientists-finds-gene-differences-in-severe-covid-patients/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/03/shutterstock_1643947495.jpg?quality=90&strip=all&w=1024",
        "publishedAt": "2022-03-07T19:14:00Z",
        "content": "Scientists have pinpointed 16 new genetic variants in people who developed severe COVID-19 in a large study published on Monday that could help researchers develop treatments for very sick patients.\r… [+1851 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NBCSports.com"
        },
        "author": "Peter King",
        "title": "Peter King's Football Morning In America - 2022 NFL Combine - NBC Sports - NBC Sports",
        "description": "INDIANAPOLIS — “I don’t know why I did it,” Aidan Hutchinson said Saturday night after his NFL Scouting Combine workout, sitting in his room at the Crowne Plaza Hotel, a few long spirals from Lucas Oil Stadium.“I just DM’d Mel Kiper.”Hutchinson was recalling …",
        "url": "https://profootballtalk.nbcsports.com/2022/03/07/nfl-scouting-combine-news-fmia-peter-king/",
        "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/03/GettyImages-1380965766.jpg",
        "publishedAt": "2022-03-07T18:30:26Z",
        "content": "INDIANAPOLIS  I dont know why I did it, Aidan Hutchinson said Saturday night after his NFL Scouting Combine workout, sitting in his room at the Crowne Plaza Hotel, a few long spirals from Lucas Oil S… [+58232 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Post"
        },
        "author": "Ariel Zilber",
        "title": "Bill Ackman: Russian invasion means World War III 'likely already started' - New York Post ",
        "description": "The Russian invasion of Ukraine means that World War III has “likely already started,” according to billionaire hedge fund manager Bill Ackman. “In January 2020, I had nightmares …",
        "url": "https://nypost.com/2022/03/07/bill-ackman-russian-invasion-means-wwiii-likely-already-started/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/03/newspress-collage-21441255-1646677068542.png?w=1024",
        "publishedAt": "2022-03-07T18:14:00Z",
        "content": "The Russian invasion of Ukraine means that World War III has “likely already started,” according to billionaire hedge fund manager Bill Ackman.\r\n“In January 2020, I had nightmares about the potential… [+3618 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "MMA Fighting"
        },
        "author": "Damon Martin",
        "title": "Ex-UFC champion Cain Velasquez denied bail in attempted murder case, judge condemns ‘reckless’ actions - MMA Fighting",
        "description": "Former UFC heavyweight champion Cain Velasquez will remain in custody until at least his next court hearing on April 12 after a judge in his case denied his bail on Monday.",
        "url": "https://www.mmafighting.com/2022/3/7/22965838/ex-ufc-champion-cain-velasquez-denied-bail-in-attempted-murder-case-judge-condemns-reckless-actions",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/DQZxppvRIGG85c4dEd6AckKioFc=/0x0:1100x576/fit-in/1200x630/cdn.vox-cdn.com/assets/1142567/085_Cain_Velasquez_vs_Antonio_Silva.jpg",
        "publishedAt": "2022-03-07T18:09:37Z",
        "content": "Former UFC heavyweight champion Cain Velasquez will remain in jail awaiting trial on attempted murder charges after he was denied bail in a hearing on Monday.\r\nJudge Shelyna Brown heard arguments fro… [+2583 chars]"
      },
      {
        "source": {
          "id": "the-verge",
          "name": "The Verge"
        },
        "author": "Jon Porter",
        "title": "Big Pixel update lets you type to talk during phone calls - The Verge",
        "description": "Google’s Pixel update allows you to avoid having to speak entirely during calls if you prefer. There are also new custom sticker options, YouTube watch party support in Duo, and a night photography mode for Snapchat.",
        "url": "https://www.theverge.com/2022/3/7/22965199/google-pixel-update-features-phone-call-captions-battery-level-stickers",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/ijAxoNmtu2_NT9AZCyWRbj7vfZY=/0x75:1090x646/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23294603/Live_Caption_for_Calls.jpg",
        "publishedAt": "2022-03-07T18:00:00Z",
        "content": "The At a Glance feature is also being upgraded"
      },
      {
        "source": {
          "id": "cbs-news",
          "name": "CBS News"
        },
        "author": "Alexander Alexander",
        "title": "COVID-19 associated with \"significant, deleterious impact\" on brain, finds U.K. study - CBS News",
        "description": "Researchers are still trying to understand how the virus results in symptoms that impact the brain for months after an infection.",
        "url": "https://www.cbsnews.com/news/covid-19-impact-on-brain-uk-study/",
        "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2021/11/27/8f332e7a-3ef7-47e2-97fc-4b58f64b0234/thumbnail/1200x630/e592cee3643eef874c76522ccc594d16/mri-brain-scans-1280.jpg",
        "publishedAt": "2022-03-07T17:32:00Z",
        "content": "Scans and cognition tests collected from hundreds of people suggest coronavirus infection is associated with \"a significant, deleterious\" change in the brain, according to a study published Monday fr… [+4556 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Fox Business"
        },
        "author": "Daniella Genovese",
        "title": "Stoli rebrands vodka after Russia’s invasion of Ukraine - Fox Business",
        "description": "Stoli Group announced that it's rebranding the name of its vodka, Stolichnaya, \"in direct response to Russia's invasion of Ukraine.\"",
        "url": "https://www.foxbusiness.com/lifestyle/stoli-group-vodka-russia-ukraine",
        "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/03/0/0/Stolichnaya-vodka.jpg?ve=1&tl=1",
        "publishedAt": "2022-03-07T17:26:06Z",
        "content": "Stoli Group announced that it's rebranding the name of its vodka, Stolichnaya, \"in direct response to Russia's invasion of Ukraine.\" \r\nThe vodka will now be marketed as \"Stoli,\" according to the comp… [+2788 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Eonline.com"
        },
        "author": "Cydney Contreras",
        "title": "Love Is Blind's Shake Slams Nick Lachey After Reunion Confrontation - E! NEWS",
        "description": "Love Is Blind's Shake kept the drama going even after the cameras stopped rolling. See what he had to say to Nick Lachey here—and why the show’s creator doesn't think he got a bad edit.",
        "url": "https://www.eonline.com/news/1322158/love-is-blinds-shake-slams-massive-twat-nick-lachey-after-reunion-confrontation",
        "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202223/rs_1200x1200-220303144446-1200-Shake.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
        "publishedAt": "2022-03-07T17:06:00Z",
        "content": "Abhishek \"Shake\" Chatterjee has some choice words for Nick Lachey.\r\nAfter their heated confrontation at the Love Is Blind reunion, the veterinarian took to Instagram March 7 to share his real thought… [+975 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Analysis by Chris Cillizza, CNN Editor-at-large",
        "title": "The 20 most outlandish lines from Donald Trump's letter to Lester Holt - CNN",
        "description": "In advance of the release of Bill Barr's memoir of his time in the Trump administration on Tuesday, NBC's Lester Holt sat down with the former attorney general to talk about his time as the nation's top cop.",
        "url": "https://www.cnn.com/2022/03/07/politics/trump-lester-holt-letter-bill-barr/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211210173034-dusa-trump-white-house-super-tease.jpg",
        "publishedAt": "2022-03-07T17:03:00Z",
        "content": null
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Toyin Owoseje, CNN",
        "title": "Supermodel Gigi Hadid to donate fashion week earnings to Ukraine relief - CNN",
        "description": "Supermodel Gigi Hadid has announced that she will donate all her fashion month earnings towards relief efforts in Ukraine.",
        "url": "https://www.cnn.com/style/article/gigi-hadid-fashion-week-earnings-ukraine-donations-intl-scli/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220307093130-04-paris-fashion-week-gigi-hadid-super-tease.jpg",
        "publishedAt": "2022-03-07T16:30:42Z",
        "content": "Supermodel Gigi Hadid has announced that she will donate all her fashion month earnings towards relief efforts in Ukraine. \r\n\"Having a set Fashion Month schedule has meant that my colleagues and I of… [+1694 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "WTOP"
        },
        "author": "Jessica Kronzer, Will Vitka",
        "title": "Convoy of truckers head back to Capital Beltway - WTOP",
        "description": "The People’s Convoy, a group of truckers and others who circled the Capital Beltway twice on Sunday headed back on Monday.",
        "url": "http://wtop.com/local/2022/03/convoy-of-truckers-expected-to-return-to-capital-beltway/",
        "urlToImage": "https://wtop.com/wp-content/uploads/2022/03/convoy6.jpg",
        "publishedAt": "2022-03-07T16:29:45Z",
        "content": "They’re back.\r\nThe People’s Convoy, a group of truckers and others who circled the Capital Beltway twice on Sunday hit the gas, the price of which is rising dramatically amid Russia’s invasion of Ukr… [+2838 chars]"
      },
      {
        "source": {
          "id": "ars-technica",
          "name": "Ars Technica"
        },
        "author": "Kyle Orland",
        "title": "Game industry unites behind call to cut off Russian market - Ars Technica",
        "description": "Ubisoft, Take-Two, EA, Activision, Epic, and more join a growing corporate movement.",
        "url": "https://arstechnica.com/gaming/2022/03/game-industry-unites-behind-call-to-cut-off-russian-market/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/03/russiaflag-760x380.jpeg",
        "publishedAt": "2022-03-07T16:21:23Z",
        "content": "116 with 57 posters participating\r\nLast week, the Ukrainian government put out a public call to \"all game development companies\" to \"temporarily block all Russian and Belorussian accounts\" in respons… [+3817 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Times"
        },
        "author": "Michael Schwirtz, Marc Santora",
        "title": "Russia-Ukraine War: Live Updates and Latest News - The New York Times",
        "description": "Russian artillery strikes hit residential areas in the southern city of Mykolaiv as Ukrainian forces battled to keep control. Russian and Ukrainian representatives were expected to meet for a third round of talks.",
        "url": "https://www.nytimes.com/live/2022/03/07/world/ukraine-russia-war",
        "urlToImage": "https://static01.nyt.com/images/2022/03/07/world/07ukraine-blog-header2/07ukraine-blog-header2-facebookJumbo.jpg",
        "publishedAt": "2022-03-07T16:21:11Z",
        "content": "PRZEMYSL, Poland Every night at Przemysls graceful 19th-century train station, there is a line of people stepping off packed carriages, fleeing Russias invasion of Ukraine.But every night at this sam… [+3343 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "National Institutes of Health"
        },
        "author": null,
        "title": "Researchers uncover how the human brain separates, stores, and retrieves memories - National Institutes of Health (.gov)",
        "description": "NIH-funded study identifies brain cells that form boundaries between discrete events.",
        "url": "https://www.nih.gov/news-events/news-releases/researchers-uncover-how-human-brain-separates-stores-retrieves-memories",
        "urlToImage": "https://www.nih.gov/sites/default/files/news-events/news-releases/2022/20220307-cells-art.jpg",
        "publishedAt": "2022-03-07T16:14:03Z",
        "content": null
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Samantha Murphy Kelly, CNN Business",
        "title": "What to expect at Apple's first product event of the year - CNN",
        "description": "Apple is about to hold its first big product event of 2022 and the focus will be on performance. That likely means faster chips, more devices with 5G connectivity and more powerful cameras.",
        "url": "https://www.cnn.com/2022/03/06/tech/apple-march-event-2022/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220304165427-restricted-2020-iphone-se-file-super-tease.jpg",
        "publishedAt": "2022-03-07T16:10:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Variety"
        },
        "author": "Rebecca Rubin",
        "title": "‘The Batman’ Flies Even Higher With $134 Million Debut at Domestic Box Office - Variety",
        "description": "“The Batman” landed a bigger opening weekend than Warner Bros., the studio behind the comic book adventure, initially expected. The newest superhero epic, starring Robert Pattinson as an exceptionally moody Caped Crusader, collected $134 million in North Amer…",
        "url": "https://variety.com/2022/film/box-office/box-office-the-batman-opening-weekend-bigger-than-expected-1235197903/",
        "urlToImage": "https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-15-at-5.54.30-PM.png?w=1024",
        "publishedAt": "2022-03-07T15:53:00Z",
        "content": "“The Batman” landed a bigger opening weekend than Warner Bros., the studio behind the comic book adventure, initially expected.\r\nThe newest superhero epic, starring Robert Pattinson as an exceptional… [+2832 chars]"
      }
    ]
  
  constructor(){
    super();
    console.log("hello")
    this.state={
     articles: this.articles,
     loading:false,
     page:1


    }
  }

 async componentDidMount(){
   
    let url="https://newsapi.org/v2/everything?q=apple&from=2022-03-08&to=2022-03-08&sortBy=popularity&apiKey=be814022afec4194b3d867e5c4c9330b&pageSize=20";
    this.setState({loading: true});
    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles, parseData, totalResults:parseData.totalResults,loading: false })

  }
  handlePrevClick=async ()=>{
   
    console.log("Previous")
    let url=`https://newsapi.org/v2/everything?q=apple&from=2022-03-08&to=2022-03-08&sortBy=popularity&apiKey=be814022afec4194b3d867e5c4c9330b&page=${this.state.page-1}&pageSize=20`;
    this.setState({loading: true});
    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles})

    this.state({
      page:this.state.page-1,
      articles: this.parseData.articles,
      loading: false
    })

  }
  handleNextClick=async ()=>{
    if(! this.state.page+1> Math.ceil(this.state.totalResults/20)){
    console.log("Next")
    let url=`https://newsapi.org/v2/everything?q=apple&from=2022-03-08&to=2022-03-08&sortBy=popularity&apiKey=be814022afec4194b3d867e5c4c9330b&page=${this.state.page+1}&pageSize=20`;
   this.setState({loading: true});
    let data=await fetch(url);
    let parseData=await data.json();
    this.setState({articles: parseData.articles})

    this.state({
      page:this.state.page+1,
      articles: this.parseData.articles,
      loading: false
    })
  }
  }
  render() {
    return (
      <div className='container my-3'>
      <h2 className='text-center'>Top-Headlines</h2>
      {this.state.loading && <Spinner/>}
      <div className='row my-3'>
      {this.state.articles.map((element)=>{
        return <div className="col-md-3 my-3" key={element.url}>
      <NewsItem  title={element.title.slice(0, 45)} description={element.description.slice(0,85)} imageUrl={element.urlToImage} newsUrl={element.url}/>
      </div>
      })}
      
      </div>
      <div className="d-flex justify-content-between">
      <button type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
      <button type="button" className="btn btn-dark "  onClick={this.handleNextClick}>Next &rarr;</button>

    </div>
      </div>
    
      
    )
  }
}

export default News