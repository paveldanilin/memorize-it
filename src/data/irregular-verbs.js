const IrregularVerbs = [
    {
        locale: {
            ru: 'возникать, появляться'
        },
        infinitive: 'arise',
        pastSimple: 'arose',
        pastParticiple: 'arisen',
        examples: [],
        transcription: ['əˈraɪz', 'əˈroʊz', 'əˈrɪzən'],
    },
    {
        locale: {
            ru: 'проснуться, пробудиться'
        },
        infinitive: 'awake',
        pastSimple: 'awoke',
        pastParticiple: 'awoken',
        transcription: ['əˈweɪk', 'əˈwəʊk', 'əˈwəʊkən'],
    },
    {
        locale: {
            ru: 'становиться'
        },
        infinitive: 'become',
        pastSimple: 'became',
        pastParticiple: 'become',
        transcription: ['bɪˈkʌm', 'bɪˈkeɪm', 'bɪˈkʌm'],
    },
    {
        locale: {
            ru: 'бежать'
        },
        infinitive: 'run',
        pastSimple: 'ran',
        pastParticiple: 'run',
        transcription: ['rʌn', 'ræn', 'rʌn'],
    },
    {
        locale: {
            ru: 'бить, ударять'
        },
        infinitive: 'beat',
        pastSimple: 'beat',
        pastParticiple: 'beaten',
        transcription: ['biːt', 'biːt', 'ˈbiːt(ə)n'],
    },
    {
        locale: {
            ru: 'начинать'
        },
        infinitive: 'begin',
        pastSimple: 'began',
        pastParticiple: 'begun',
        transcription: ['bɪˈɡɪn', 'bɪˈɡan', 'bɪˈɡʌn'],
    },
    {
        locale: {
            ru: 'сгибать'
        },
        infinitive: 'bend',
        pastSimple: 'bent',
        pastParticiple: 'bent',
        transcription: ['bend', 'bent', 'bent'],
    },
    {
        locale: {
            ru: 'держать пари'
        },
        infinitive: 'bet',
        pastSimple: 'bet',
        pastParticiple: 'bet',
        transcription: ['ˈbet', 'ˈbet', 'ˈbet'],
    },
    {
        locale: {
            ru: 'кусать'
        },
        infinitive: 'bite',
        pastSimple: 'bit',
        pastParticiple: 'bitten',
        transcription: ['baɪt', 'bɪt', 'ˈbɪtn'],
    },
    {
        locale: {
            ru: 'кровоточить'
        },
        infinitive: 'bleed',
        pastSimple: 'bled',
        pastParticiple: 'bled',
        transcription: ['bliːd', 'bled', 'bled'],
    },
    {
        locale: {
            ru: 'дуть'
        },
        infinitive: 'blow',
        pastSimple: 'blew',
        pastParticiple: 'blown',
        transcription: ['bləʊ', 'bluː', 'bləʊn'],
    },
    {
        locale: {
            ru: 'ломать'
        },
        infinitive: 'break',
        pastSimple: 'broke',
        pastParticiple: 'broken',
        transcription: ['breɪk', 'brəʊk', 'ˈbrəʊk(ə)n'],
    },
    {
        locale: {
            ru: 'размножаться, разводить'
        },
        infinitive: 'breed',
        pastSimple: 'bred',
        pastParticiple: 'bred',
        transcription: ['briːd', 'brɛd', 'brɛd'],
    },
    {
        locale: {
            ru: 'приносить, приводить'
        },
        infinitive: 'bring',
        pastSimple: 'brought',
        pastParticiple: 'brought',
        transcription: ['brɪŋ', 'brɔːt', 'brɔːt'],
    },
    {
        locale: {
            ru: 'строить, сооружать'
        },
        infinitive: 'build',
        pastSimple: 'built',
        pastParticiple: 'built',
        transcription: ['bɪld', 'bɪlt', 'bɪlt'],
    },
    {
        locale: {
            ru: 'гореть, пылать'
        },
        infinitive: 'burn',
        pastSimple: 'burnt',
        pastParticiple: 'burnt',
        transcription: ['bɜːn', 'bɜːnt', 'bɜːnt'],
    },
    {
        locale: {
            ru: 'покупать'
        },
        infinitive: 'buy',
        pastSimple: 'bought',
        pastParticiple: 'bought',
        transcription: ['baɪ', 'bɔːt', 'bɔːt'],
    },
    {
        locale: {
            ru: 'ловить, схватить'
        },
        infinitive: 'catch',
        pastSimple: 'caught',
        pastParticiple: 'caught',
        transcription: ['katʃ', 'kɔːt', 'kɔːt'],
    },
    {
        locale: {
            ru: 'выбирать'
        },
        infinitive: 'choose',
        pastSimple: 'chose',
        pastParticiple: 'chosen',
        transcription: ['tʃuːz', 'tʃəʊz', 'ˈtʃəʊzn'],
    },
    {
        locale: {
            ru: 'приходить, приезжать'
        },
        infinitive: 'come',
        pastSimple: 'came',
        pastParticiple: 'come',
        transcription: ['kʌm', 'keɪm', 'kʌm'],
    },
    {
        locale: {
            ru: 'стоить (стоимость)'
        },
        infinitive: 'cost',
        pastSimple: 'cost',
        pastParticiple: 'cost',
        transcription: ['kɒst', 'kɒst', 'kɒst'],
    },
    {
        locale: {
            ru: 'резать'
        },
        infinitive: 'cut',
        pastSimple: 'cut',
        pastParticiple: 'cut',
        transcription: ['kʌt', 'kʌt', 'kʌt'],
    },
    {
        locale: {
            ru: 'делать, выполнять, действовать'
        },
        infinitive: 'do',
        pastSimple: 'did',
        pastParticiple: 'done',
        transcription: ['duː', 'dɪd', 'dʌn'],
    },
    {
        locale: {
            ru: 'копать'
        },
        infinitive: 'dig',
        pastSimple: 'dug',
        pastParticiple: 'dug',
        transcription: ['dɪɡ', 'dʌɡ', 'dʌɡ'],
    },
    {
        locale: {
            ru: 'рисовать, тащить'
        },
        infinitive: 'draw',
        pastSimple: 'drew',
        pastParticiple: 'drawn',
        transcription: ['drɔː', 'druː', 'drɔːn'],
    },
    {
        locale: {
            ru: 'мечтать'
        },
        infinitive: 'dream',
        pastSimple: 'dreamt',
        pastParticiple: 'dreamt',
        transcription: ['driːm', 'dremt', 'dremt'],
    },
    {
        locale: {
            ru: 'пить'
        },
        infinitive: 'drink',
        pastSimple: 'drank',
        pastParticiple: 'drunk',
        transcription: ['drɪŋk', 'draŋk', 'drʌŋk'],
    },
    {
        locale: {
            ru: 'водить машину, ехать'
        },
        infinitive: 'drive',
        pastSimple: 'drove',
        pastParticiple: 'driven',
        transcription: ['drʌɪv', 'drəʊv', 'ˈdrɪvn'],
    },
    {
        locale: {
            ru: 'есть'
        },
        infinitive: 'eat',
        pastSimple: 'ate',
        pastParticiple: 'eaten',
        transcription: ['iːt', 'et', 'ˈiːtən'],
    },
    {
        locale: {
            ru: 'падать'
        },
        infinitive: 'fall',
        pastSimple: 'fell',
        pastParticiple: 'fallen',
        transcription: ['fɔːl', 'fel', 'ˈfɔːlən'],
    },
    {
        locale: {
            ru: 'кормить'
        },
        infinitive: 'feed',
        pastSimple: 'fed',
        pastParticiple: 'fed',
        transcription: ['fiːd', 'fed', 'fed'],
    },
    {
        locale: {
            ru: 'чувствовать'
        },
        infinitive: 'feel',
        pastSimple: 'felt',
        pastParticiple: 'felt',
        transcription: ['fiːl', 'felt', 'felt'],
    },
    {
        locale: {
            ru: 'драться, сражаться, воевать'
        },
        infinitive: 'fight',
        pastSimple: 'fought',
        pastParticiple: 'fought',
        transcription: ['fʌɪt', 'fɔːt', 'fɔːt'],
    },
    {
        locale: {
            ru: 'находить, обнаруживать, встречать'
        },
        infinitive: 'find',
        pastSimple: 'found',
        pastParticiple: 'found',
        transcription: ['faɪnd', 'faʊnd', 'faʊnd'],
    },
    {
        locale: {
            ru: 'лететь'
        },
        infinitive: 'fly',
        pastSimple: 'flew',
        pastParticiple: 'flown',
        transcription: ['flaɪ', 'fluː', 'fləʊn'],
    },
    {
        locale: {
            ru: 'забывать'
        },
        infinitive: 'forget',
        pastSimple: 'forgot',
        pastParticiple: 'forgotten',
        transcription: ['fəˈɡɛt', 'fəˈɡɒt', 'fəˈɡɒtn'],
    },
    {
        locale: {
            ru: 'прощать'
        },
        infinitive: 'forgive',
        pastSimple: 'forgave',
        pastParticiple: 'forgiven',
        transcription: ['fəˈɡɪv', 'fəˈɡeɪv', 'fəˈɡɪvən'],
    },
    {
        locale: {
            ru: 'замораживать, замерзать'
        },
        infinitive: 'freeze',
        pastSimple: 'froze',
        pastParticiple: 'frozen',
        transcription: ['friːz', 'frəʊz', 'ˈfrəʊzn'],
    },
    {
        locale: {
            ru: 'доставать, получать, добиваться'
        },
        infinitive: 'get',
        pastSimple: 'got',
        pastParticiple: 'got',
        transcription: ['ˈɡet', 'ˈɡɒt', 'ˈɡɒt'],
    },
    {
        locale: {
            ru: 'давать, отдавать'
        },
        infinitive: 'give',
        pastSimple: 'gave',
        pastParticiple: 'given',
        transcription: ['ɡɪv', 'ɡeɪv', 'ˈɡɪv(ə)n'],
    },
    {
        locale: {
            ru: 'идти, ехать, двигаться'
        },
        infinitive: 'go',
        pastSimple: 'went',
        pastParticiple: 'gone',
        transcription: ['ɡəʊ', 'ˈwent', 'ɡɒn'],
    },
    {
        locale: {
            ru: 'расти, увеличиваться'
        },
        infinitive: 'grow',
        pastSimple: 'grew',
        pastParticiple: 'grown',
        transcription: ['ɡrəʊ', 'ɡruː', 'ɡrəʊn'],
    },
    {
        locale: {
            ru: 'иметь, обладать'
        },
        infinitive: 'have',
        pastSimple: 'had',
        pastParticiple: 'had',
        transcription: ['hæv', 'hæd', 'hæd'],
    },
    {
        locale: {
            ru: 'слышать'
        },
        infinitive: 'hear',
        pastSimple: 'heard',
        pastParticiple: 'heard',
        transcription: ['hɪə', 'hɜːd', 'hɜːd'],
    },
    {
        locale: {
            ru: 'прятать, скрывать'
        },
        infinitive: 'hide',
        pastSimple: 'hid',
        pastParticiple: 'hidden',
        transcription: ['haɪd', 'hɪd', 'ˈhɪdn'],
    },
    {
        locale: {
            ru: 'ударять'
        },
        infinitive: 'hit',
        pastSimple: 'hit',
        pastParticiple: 'hit',
        transcription: ['hɪt', 'hɪt', 'hɪt'],
    },
    {
        locale: {
            ru: 'держать, владеть'
        },
        infinitive: 'hold',
        pastSimple: 'held',
        pastParticiple: 'held',
        transcription: ['həʊld', 'held', 'held'],
    },
    {
        locale: {
            ru: 'делать больно, обижать'
        },
        infinitive: 'hurt',
        pastSimple: 'hurt',
        pastParticiple: 'hurt',
        transcription: ['hɜːt', 'hɜːt', 'hɜːt'],
    },
    {
        locale: {
            ru: 'хранить, содержать'
        },
        infinitive: 'keep',
        pastSimple: 'kept',
        pastParticiple: 'kept',
        transcription: ['kiːp', 'kept', 'kept'],
    },
    {
        locale: {
            ru: 'знать'
        },
        infinitive: 'know',
        pastSimple: 'knew',
        pastParticiple: 'known',
        transcription: ['nəʊ', 'njuː', 'nəʊn'],
    },
    {
        locale: {
            ru: 'лежать, класть'
        },
        infinitive: 'lay',
        pastSimple: 'laid',
        pastParticiple: 'laid',
        transcription: ['leɪ', 'leɪd', 'leɪd'],
    },
    {
        locale: {
            ru: 'вести, приводить'
        },
        infinitive: 'lead',
        pastSimple: 'led',
        pastParticiple: 'led',
        transcription: ['liːd', 'led', 'led'],
    },
    {
        locale: {
            ru: 'опираться, прислоняться'
        },
        infinitive: 'lean',
        pastSimple: 'leant',
        pastParticiple: 'leant',
        transcription: ['liːn', 'lent', 'lent'],
    },
    {
        locale: {
            ru: 'оставлять, уезжать'
        },
        infinitive: 'leave',
        pastSimple: 'left',
        pastParticiple: 'left',
        transcription: ['liːv', 'left', 'left'],
    },
    {
        locale: {
            ru: 'давать в займы, одалживать'
        },
        infinitive: 'lend',
        pastSimple: 'lent',
        pastParticiple: 'lent',
        transcription: ['lend', 'lent', 'lent'],
    },
    {
        locale: {
            ru: 'позволять'
        },
        infinitive: 'let',
        pastSimple: 'let',
        pastParticiple: 'let',
        transcription: ['let', 'let', 'let'],
    },
    {
        locale: {
            ru: 'терять, проигрывать, упускать'
        },
        infinitive: 'lose',
        pastSimple: 'lost',
        pastParticiple: 'lost',
        transcription: ['luːz', 'lɒst', 'lɒst'],
    },
    {
        locale: {
            ru: 'создавать, делать'
        },
        infinitive: 'make',
        pastSimple: 'made',
        pastParticiple: 'made',
        transcription: ['ˈmeɪk', 'ˈmeɪd', 'ˈmeɪd'],
    },
    {
        locale: {
            ru: 'иметь ввиду, значить'
        },
        infinitive: 'mean',
        pastSimple: 'meant',
        pastParticiple: 'meant',
        transcription: ['miːn', 'mɛnt', 'mɛnt'],
    },
    {
        locale: {
            ru: 'встречать, соответсвовать (требованиям)'
        },
        infinitive: 'meet',
        pastSimple: 'met',
        pastParticiple: 'met',
        transcription: ['miːt', 'met', 'met'],
    },
    {
        locale: {
            ru: 'платить'
        },
        infinitive: 'pay',
        pastSimple: 'paid',
        pastParticiple: 'paid',
        transcription: ['peɪ', 'peɪd', 'peɪd'],
    },
    {
        locale: {
            ru: 'класть, положить'
        },
        infinitive: 'put',
        pastSimple: 'put',
        pastParticiple: 'put',
        transcription: ['ˈpʊt', 'ˈpʊt', 'ˈpʊt'],
    },
    {
        locale: {
            ru: 'прекращать, бросать, оставлять'
        },
        infinitive: 'quit',
        pastSimple: 'quit',
        pastParticiple: 'quit',
        transcription: ['kwɪt', 'kwɪt', 'kwɪt'],
    },
    {
        locale: {
            ru: 'читать'
        },
        infinitive: 'read',
        pastSimple: 'read',
        pastParticiple: 'read',
        transcription: ['riːd', 'red', 'red'],
    },
    {
        locale: {
            ru: 'скакать, ехать верхом'
        },
        infinitive: 'ride',
        pastSimple: 'rode',
        pastParticiple: 'ridden',
        transcription: ['raɪd', 'rəʊd', 'ˈrɪdn'],
    },
    {
        locale: {
            ru: 'звенеть, звонить'
        },
        infinitive: 'ring',
        pastSimple: 'rang',
        pastParticiple: 'rung',
        transcription: ['rɪŋ', 'ræŋ', 'rʌŋ'],
    },
    {
        locale: {
            ru: 'говорить'
        },
        infinitive: 'say',
        pastSimple: 'said',
        pastParticiple: 'said',
        transcription: ['ˈseɪ', 'ˈsed', 'ˈsed'],
    },
    {
        locale: {
            ru: 'видеть, смотреть'
        },
        infinitive: 'see',
        pastSimple: 'saw',
        pastParticiple: 'seen',
        transcription: ['ˈsiː', 'ˈsɔː', 'ˈsiːn'],
    },
    {
        locale: {
            ru: 'продавать, торговать'
        },
        infinitive: 'sell',
        pastSimple: 'sold',
        pastParticiple: 'sold',
        transcription: ['sel', 'səʊld', 'səʊld'],
    },
    {
        locale: {
            ru: 'отправлять, посылать'
        },
        infinitive: 'send',
        pastSimple: 'sent',
        pastParticiple: 'sent',
        transcription: ['send', 'sent', 'sent'],
    },
    {
        locale: {
            ru: 'устанавливать, размещать'
        },
        infinitive: 'set',
        pastSimple: 'set',
        pastParticiple: 'set',
        transcription: ['set', 'set', 'set'],
    },
    {
        locale: {
            ru: 'трясти, встряхивать'
        },
        infinitive: 'shake',
        pastSimple: 'shook',
        pastParticiple: 'shaken',
        transcription: ['ʃeɪk', 'ʃʊk', 'ˈʃeɪkən'],
    },
    {
        locale: {
            ru: 'сиять, озарять'
        },
        infinitive: 'shine',
        pastSimple: 'shone',
        pastParticiple: 'shone',
        transcription: ['ʃʌɪn', 'ʃɒn', 'ʃɒn'],
    },
    {
        locale: {
            ru: 'стрелять'
        },
        infinitive: 'shoot',
        pastSimple: 'shot',
        pastParticiple: 'shot',
        transcription: ['ʃuːt', 'ʃɒt', 'ʃɒt'],
    },
    {
        locale: {
            ru: 'показывать'
        },
        infinitive: 'show',
        pastSimple: 'showed',
        pastParticiple: 'shown',
        transcription: ['ʃəʊ', 'ʃəʊd', 'ʃəʊn'],
    },
    {
        locale: {
            ru: 'сокращать, сживать'
        },
        infinitive: 'shrink',
        pastSimple: 'shrank',
        pastParticiple: 'shrunk',
        transcription: ['ʃrɪŋk', 'ʃraŋk', 'ʃrʌŋk'],
    },
    {
        locale: {
            ru: 'закрывать'
        },
        infinitive: 'shut',
        pastSimple: 'shut',
        pastParticiple: 'shut',
        transcription: ['ʃʌt', 'ʃʌt', 'ʃʌt'],
    },
    {
        locale: {
            ru: 'петь'
        },
        infinitive: 'sing',
        pastSimple: 'sang',
        pastParticiple: 'sung',
        transcription: ['sɪŋ', 'sæŋ', 'sʌŋ'],
    },
    {
        locale: {
            ru: 'тонуть'
        },
        infinitive: 'sink',
        pastSimple: 'sank',
        pastParticiple: 'sunk',
        transcription: ['sɪŋk', 'sæŋk', 'sʌŋk'],
    },
    {
        locale: {
            ru: 'сидеть'
        },
        infinitive: 'sit',
        pastSimple: 'sat',
        pastParticiple: 'sat',
        transcription: ['sɪt', 'sæt', 'sæt'],
    },
    {
        locale: {
            ru: 'спать'
        },
        infinitive: 'sleep',
        pastSimple: 'slept',
        pastParticiple: 'slept',
        transcription: ['sliːp', 'slɛpt', 'slɛpt'],
    },
    {
        locale: {
            ru: 'говорить, разговаривать'
        },
        infinitive: 'speak',
        pastSimple: 'spoke',
        pastParticiple: 'spoken',
        transcription: ['spiːk', 'spəʊk', 'ˈspəʊk(ə)n'],
    },
    {
        locale: {
            ru: 'тратить, проводить(время)'
        },
        infinitive: 'spend',
        pastSimple: 'spent',
        pastParticiple: 'spent',
        transcription: ['spɛnd', 'spɛnt', 'spɛnt'],
    },
    {
        locale: {
            ru: 'проливать, разливать'
        },
        infinitive: 'spill',
        pastSimple: 'spilt',
        pastParticiple: 'spilt',
        transcription: ['spɪl', 'spɪlt', 'spɪlt'],
    },
    {
        locale: {
            ru: 'распространять'
        },
        infinitive: 'spread',
        pastSimple: 'spread',
        pastParticiple: 'spread',
        transcription: ['sprɛd', 'sprɛd', 'sprɛd'],
    },
    {
        locale: {
            ru: 'мчаться'
        },
        infinitive: 'speed',
        pastSimple: 'sped',
        pastParticiple: 'sped',
        transcription: ['spiːd', 'spɛd', 'spɛd'],
    },
    {
        locale: {
            ru: 'стоять, терпеть'
        },
        infinitive: 'stand',
        pastSimple: 'stood',
        pastParticiple: 'stood',
        transcription: ['stand', 'stʊd', 'stʊd'],
    },
    {
        locale: {
            ru: 'красть, воровать'
        },
        infinitive: 'steal',
        pastSimple: 'stole',
        pastParticiple: 'stolen',
        transcription: ['stiːl', 'stəʊl', 'ˈstəʊlən'],
    },
    {
        locale: {
            ru: 'втыкать, приклеивать'
        },
        infinitive: 'stick',
        pastSimple: 'stuck',
        pastParticiple: 'stuck',
        transcription: ['stɪk', 'stʌk', 'stʌk'],
    },
    {
        locale: {
            ru: 'жалить, щипать'
        },
        infinitive: 'sting',
        pastSimple: 'stung',
        pastParticiple: 'stung',
        transcription: ['stɪŋ', 'stʌŋ', 'stʌŋ'],
    },
    {
        locale: {
            ru: 'вонять'
        },
        infinitive: 'stink',
        pastSimple: 'stank',
        pastParticiple: 'stunk',
        transcription: ['stɪŋk', 'staŋk', 'stʌŋk'],
    },
    {
        locale: {
            ru: 'клясться'
        },
        infinitive: 'swear',
        pastSimple: 'swore',
        pastParticiple: 'sworn',
        transcription: ['swɛː', 'swɔː', 'swɔːn'],
    },
    {
        locale: {
            ru: 'мести, вычищать'
        },
        infinitive: 'sweep',
        pastSimple: 'swept',
        pastParticiple: 'swept',
        transcription: ['swiːp', 'swɛpt', 'swɛpt'],
    },
    {
        locale: {
            ru: 'плавать, плыть'
        },
        infinitive: 'swim',
        pastSimple: 'swam',
        pastParticiple: 'swum',
        transcription: ['swɪm', 'swæm', 'swʌm'],
    },
    {
        locale: {
            ru: 'качать'
        },
        infinitive: 'swing',
        pastSimple: 'swung',
        pastParticiple: 'swung',
        transcription: ['swɪŋ', 'swʌŋ', 'swʌŋ'],
    },
    {
        locale: {
            ru: 'брать, воспринимать'
        },
        infinitive: 'take',
        pastSimple: 'took',
        pastParticiple: 'taken',
        transcription: ['teɪk', 'tʊk', 'ˈteɪkən'],
    },
    {
        locale: {
            ru: 'обучать, учить'
        },
        infinitive: 'teach',
        pastSimple: 'taught',
        pastParticiple: 'taught',
        transcription: ['tiːtʃ', 'tɔːt', 'tɔːt'],
    },
    {
        locale: {
            ru: 'рвать, срывать'
        },
        infinitive: 'tear',
        pastSimple: 'tore',
        pastParticiple: 'torn',
        transcription: ['ˈtɪə', 'ˈtɔː', 'ˈtɔːn'],
    },
    {
        locale: {
            ru: 'рассказывать'
        },
        infinitive: 'tell',
        pastSimple: 'told',
        pastParticiple: 'told',
        transcription: ['tel', 'təʊld', 'təʊld'],
    },
    {
        locale: {
            ru: 'думать'
        },
        infinitive: 'think',
        pastSimple: 'thought',
        pastParticiple: 'thought',
        transcription: ['θɪŋk', 'θɔːt', 'θɔːt'],
    },
    {
        locale: {
            ru: 'кидать, бросать'
        },
        infinitive: 'throw',
        pastSimple: 'threw',
        pastParticiple: 'thrown',
        transcription: ['θrəʊ', 'θruː', 'θroʊn'],
    },
    {
        locale: {
            ru: 'понимать, постигать'
        },
        infinitive: 'understand',
        pastSimple: 'understood',
        pastParticiple: 'understood',
        transcription: ['ʌndəˈstand', 'ʌndəˈstʊd', 'ʌndəˈstʊd'],
    },
    {
        locale: {
            ru: 'просыпаться, пробуждаться'
        },
        infinitive: 'wake',
        pastSimple: 'woke',
        pastParticiple: 'woken',
        transcription: ['weɪk', 'wəʊk', 'ˈwəʊkən'],
    },
    {
        locale: {
            ru: 'носить (одежду)'
        },
        infinitive: 'wear',
        pastSimple: 'wore',
        pastParticiple: 'worn',
        transcription: ['weə', 'wɔː', 'wɔːn'],
    },
    {
        locale: {
            ru: 'выигрывать, побеждать'
        },
        infinitive: 'win',
        pastSimple: 'won',
        pastParticiple: 'won',
        transcription: ['wɪn', 'wʌn', 'wʌn'],
    },
    {
        locale: {
            ru: 'писать, записывать'
        },
        infinitive: 'write',
        pastSimple: 'wrote',
        pastParticiple: 'written',
        transcription: ['rʌɪt', 'rəʊt', 'ˈrɪtn'],
    },
];

export { IrregularVerbs };
