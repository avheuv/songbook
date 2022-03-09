var songList=[
        ["Great Is Thy Faithfulness", "Great is Thy faithfulness, O God my Father<br>There is no shadow of turning with Thee<br>Thou changest not, Thy compassions, they fail not<br>As Thou hast been, Thou forever will be<br><br>CHORUS<br>Great is Thy faithfulness<br>Great is Thy faithfulness<br>Morning by morning new mercies I see<br>All I have needed Thy hand hath provided<br>Great is Thy faithfulness, Lord, unto me<br><br>Summer and winter and springtime and harvest<br>Sun, moon and stars in their courses above<br>Join with all nature in manifold witness<br>To Thy great faithfulness, mercy and love. CHORUS<br><br>Pardon for sin and a peace that endureth<br>Thine own dear presence to cheer and to guide<br>Strength for today and bright hope for tomorrow<br>Blessings all mine with 10, 000 beside. CHORUS"],
        
        ["This Is My Father's World","This is my Father's world,<br>And to my listening ears<br>All nature sings, and round me rings<br>The music of the spheres.<br>This is my Father's world:<br>I rest me in the thought<br>Of rocks and trees, of skies and seas--<br>His hand the wonders wrought.<br><br>This is my Father's world:<br>The birds their carols raise,<br>The morning light, the lily white,<br>Declare their Maker's praise.<br>This is my Father's world:<br>He shines in all that's fair;<br>In the rustling grass I hear Him pass,<br>He speaks to me everywhere.<br><br>This is my Father's world:<br>O let me ne'er forget<br>That though the wrong seems oft so strong,<br>God is the Ruler yet.<br>This is my Father's world:<br>Why should my heart be sad?<br>The Lord is King: let the heavens ring!<br>God reigns; let earth be glad!"],

        ["Turn Your Eyes Upon Jesus","Turn your eyes upon Jesus<br>Look full in his wonderful face<br>And the things of earth will grow strangely dim<br>In the light of his glory and grace.<br><br>Turn your thoughts upon Jesus<br>Think deep on His marvelous love<br>And the thoughts of sin and self and strife<br>Will be lost in His rapture above."],

        ["Knowing You","All I once held dear, built my life upon<br>All this world reveres, and wars to own<br>All I once thought gain I have counted loss<br>Spent and worthless now, compared to this<br><br>CHORUS<br>Knowing You, Jesus, Knowing You<br>There is no greater thing<br>You're my all, You're the best<br>You're my joy, my righteousness<br>And I love You, Lord."],

        ["Have You Seen Jesus My Lord","Lyrics"],
    
        ["Awesome God","Lyrics"],
    
        ["Be Unto Your Name","Lyrics"],
    
        ["Lord of the Dance","Lyrics"],    

        ["Song of Peace","Lyrics"],
    
        ["I Life My Eyes Up","Lyrics"],
    
        ["Lord of the Dance","Lyrics"],
    
        ["Take My Life and Let It Be","Lyrics"],
    
        ["Lead Me, Guide Me","Lyrics"],
    
        ["I Will Sing of the Mercies...","Lyrics"],
    
        ["Oh, My Child","Lyrics"],
    
        ["Sea Walker","Lyrics"],
    
        ["How Majestic is Your Name","Lyrics"],
    
        ["Mighty To Save","Lyrics"],
    
        ["Joyful, Joyful, We Adore Thee","Lyrics"],
    
        ["What A Friend We Have in Jesus","Lyrics"],
    
        ["When Peace Like A River","Lyrics"],
    
        ["Great Is The Lord","Lyrics"],
    
        ["Step By Step","Lyrics"],
    
        ["God Of Wonders","Lyrics"],
    
        ["Open Our Eyes Lord","Lyrics"],
    
        ["The Kinder Blinder Song","Lyrics"],
    
        ["Shine Jesus Shine","Lyrics"],
    
        ["God And God Alone","Lyrics"],
    
        ["Be Thou My Vision","Lyrics"],
    
        ["How Deep The Father's Love For Us","Lyrics"],
    
        ["You're Beautiful","Lyrics"],
    
        ["The Three Song","Lyrics"],
    
        ["Amazing Grace","Lyrics"],
    
        ["Praise To The Lord, The Almighty","Lyrics"],
    
        ["When I Survey The Wondrous Cross","Lyrics"],
    
        ["Thy Word","Lyrics"],
    
        ["Beautiful Savior","Lyrics"],
    
        ["How Great Thou Art","Lyrics"],
    
        ["As The Deer","Lyrics"],
    
        ["All In All","Lyrics"],
    
        ["Sanctuary","Lyrics"]
];

//Code for sorting the list of songs alphabetically by song title
// First, create an array of just the song titles
var songTitles = [];
var songListLength = songList.length;

for (var i = 0; i < songList.length; i++){
    songTitles[i] = songList[i][0];
}

//Then sort the list alphabetically
var sortedSongTitles = songTitles.sort();

//Create an array, which represents each songs place in order
var songOrder = [];

//Loop over the alphabetical list and 
for (var i = 0; i < songList.length; i++){
    
    songTitles[i] = songList[i][0];
}
