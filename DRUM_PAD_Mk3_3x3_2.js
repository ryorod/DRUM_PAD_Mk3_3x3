//パッドごとにcolorをランダムに生成（　https://q-az.net/random-color-code/　を参照しました）
//for文を使用し、16進数で6桁のカラーコードをランダムに生成
//変数に"#"を代入
var randomColor1 = "#";
//６桁になるまで、
for(var i = 0; i < 6; i++) {
  //#にランダムな数値を付け足す
  　//"16*Math.random()"で0以上16未満の数字を得る、"| 0"で小数点以下切り捨て、"toString(16)"で16進数に
    randomColor1 += (16*Math.random() | 0).toString(16);
}
var randomColor2 = "#";
for(var i = 0; i < 6; i++) {
    randomColor2 += (16*Math.random() | 0).toString(16);
}
var randomColor3 = "#";
for(var i = 0; i < 6; i++) {
    randomColor3 += (16*Math.random() | 0).toString(16);
}
var randomColor4 = "#";
for(var i = 0; i < 6; i++) {
    randomColor4 += (16*Math.random() | 0).toString(16);
}
var randomColor5 = "#";
for(var i = 0; i < 6; i++) {
    randomColor5 += (16*Math.random() | 0).toString(16);
}
var randomColor6 = "#";
for(var i = 0; i < 6; i++) {
    randomColor6 += (16*Math.random() | 0).toString(16);
}
var randomColor7 = "#";
for(var i = 0; i < 6; i++) {
    randomColor7 += (16*Math.random() | 0).toString(16);
}
var randomColor8 = "#";
for(var i = 0; i < 6; i++) {
    randomColor8 += (16*Math.random() | 0).toString(16);
}
var randomColor9 = "#";
for(var i = 0; i < 6; i++) {
    randomColor9 += (16*Math.random() | 0).toString(16);
}

//楽器の配列
var instruments = ['#Kick', '#Snare', '#HHF', '#HHC', '#HHO', '#Crash1', '#Crash3', '#Tom1', '#Tom2', '#Claps', '#Cowbell', '#Crash2', '#CymbalFX', '#Fx2', '#RideBell', '#RideEdge', '#SFX', '#Snap', '#SnareGost', '#SnareOpen', '#CrossStick'];

//jQueryでアニメーションを付与
$(function(){
  //"loading..."が表示され、フェードアウトする
  $('#load').fadeIn(300).fadeOut(3500);
  $('#help').fadeIn(3000);
  //パッドが表示される
  $('#pad1').slideDown(3500);
  $('#pad2').slideDown(3500);
  $('#pad3').slideDown(3500);
  $('#pad4').slideDown(3500);
  $('#pad5').slideDown(3500);
  $('#pad6').slideDown(3500);
  $('#pad7').slideDown(3500);
  $('#pad8').slideDown(3500);
  $('#pad9').slideDown(3500);
  //録音ボタンを付け足す予定でした・・・
  //$('#rec').fadeIn(3500);
  //rearrangeボタンが表示される
  $('#rearrange').fadeIn(10000);
  //rearrangeボタンを押すと、
  $('#rearrange').click(function(){
   //(このインデント内のコードはrearrangeされた後に実行されるもの)
    //パッドのcolor変更
    //cssのそれぞれのパッドのbackground-colorがrandomColorに上書きされる
    $('#pad1').css('background-color',randomColor1);
    $('#pad2').css('background-color',randomColor2);
    $('#pad3').css('background-color',randomColor3);
    $('#pad4').css('background-color',randomColor4);
    $('#pad5').css('background-color',randomColor5);
    $('#pad6').css('background-color',randomColor6);
    $('#pad7').css('background-color',randomColor7);
    $('#pad8').css('background-color',randomColor8);
    $('#pad9').css('background-color',randomColor9);
    //instrumentsをランダムに抽出
    //パッドを押すと、
    $('#pad1').click(function(){
      //ランダムに選択された音を鳴らす（ https://qiita.com/skwbr/items/be3b4d7864ab7d779019 を参照しました）
      //"Math.random()*instruments.length"で0以上instrumentsの数未満の値を得て、"Math.floor"で整数化されて
      //出てきた数値目のinstrumentが選ばれ、currentTimeで再生開始時間を0とし、play()で再生される
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].currentTime = 0;
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].play();
    });
    $('#pad2').click(function(){
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].currentTime = 0;
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].play();
    });
    $('#pad3').click(function(){
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].currentTime = 0;
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].play();
    });
    $('#pad4').click(function(){
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].currentTime = 0;
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].play();
    });
    $('#pad5').click(function(){
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].currentTime = 0;
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].play();
    });
    $('#pad6').click(function(){
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].currentTime = 0;
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].play();
    });
    $('#pad7').click(function(){
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].currentTime = 0;
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].play();
    });
    $('#pad8').click(function(){
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].currentTime = 0;
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].play();
    });
    $('#pad9').click(function(){
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].currentTime = 0;
      $(instruments[Math.floor(Math.random()*instruments.length)])[0].play();
    });
    //rearrangeボタンが消える
    $('#rearrange').slideUp(500);
    //if文
    //真ん中のパッドが真っ黒になった場合のみ、"BLACKOUT!"と表示される
    //それ以外の場合は"NEW INSTRUMENTS ADDED!"と表示される
    //(ブラックアウトの条件を満たす確率は極めて低い笑)
    if(randomColor5 === '#000000'){
      $('#blackout').slideDown(200).slideUp(3000);
    } else {
      $('#message').slideDown(200).slideUp(3000);
    }
  });
  //演奏
  //パッドをクリックすると、指定した楽器が鳴る(これがrearrangeボタンを押す前のデフォルトの設定)
  $('#pad1').click(function(){
    $('#Kick')[0].currentTime = 0;
    $('#Kick')[0].play();
  });
  $('#pad2').click(function(){
    $('#Snare')[0].currentTime = 0;
    $('#Snare')[0].play();
  });
  $('#pad3').click(function(){
    $('#HHF')[0].currentTime = 0;
    $('#HHF')[0].play();
  });
  $('#pad4').click(function(){
    $('#HHC')[0].currentTime = 0;
    $('#HHC')[0].play();
  });
  $('#pad5').click(function(){
    $('#HHO')[0].currentTime = 0;
    $('#HHO')[0].play();
  });
  $('#pad6').click(function(){
    $('#Crash1')[0].currentTime = 0;
    $('#Crash1')[0].play();
  });
  $('#pad7').click(function(){
    $('#Crash3')[0].currentTime = 0;
    $('#Crash3')[0].play();
  });
  $('#pad8').click(function(){
    $('#Tom1')[0].currentTime = 0;
    $('#Tom1')[0].play();
  });
  $('#pad9').click(function(){
    $('#Tom2')[0].currentTime = 0;
    $('#Tom2')[0].play();
  });
  //キーボードを押して演奏
  var countValue = 0;
  var pianoOrBass = 0;
  var countSpaceValue = 0;
  var countOptionValue = 0;
  var countCommandValue = 0;
  function setOctave(){
    $(window).off('keydown.oct');
      switch(countSpaceValue%2){
       case 0:
        $(window).on('keydown.drm',function(e){
         if(e.keyCode == 81){
            $('#Kick')[0].currentTime = 0;
            $('#Kick')[0].play();
         }else if(e.keyCode == 87){
            $('#Snare')[0].currentTime = 0;
            $('#Snare')[0].play();
         }else if(e.keyCode == 69){
            $('#HHF')[0].currentTime = 0;
            $('#HHF')[0].play();
         }else if(e.keyCode == 82){
            $('#HHC')[0].currentTime = 0;
            $('#HHC')[0].play();
         }else if(e.keyCode == 84){
            $('#HHO')[0].currentTime = 0;
            $('#HHO')[0].play();
         }else if(e.keyCode == 89){
            $('#Crash1')[0].currentTime = 0;
            $('#Crash1')[0].play();
         }else if(e.keyCode == 85){
            $('#Crash3')[0].currentTime = 0;
            $('#Crash3')[0].play();
         }else if(e.keyCode == 73){
            $('#Tom1')[0].currentTime = 0;
            $('#Tom1')[0].play();
         }else if(e.keyCode == 79){
            $('#Tom2')[0].currentTime = 0;
            $('#Tom2')[0].play();
         }else if(e.keyCode == 49){
            $('#CrossStick')[0].currentTime = 0;
            $('#CrossStick')[0].play();
         }else if(e.keyCode == 50){
            $('#SnareOpen')[0].currentTime = 0;
            $('#SnareOpen')[0].play();
         }else if(e.keyCode == 51){
            $('#SnareGost')[0].currentTime = 0;
            $('#SnareGost')[0].play();
         }else if(e.keyCode == 52){
            $('#Cowbell')[0].currentTime = 0;
            $('#Cowbell')[0].play();
         }else if(e.keyCode == 53){
            $('#Crash2')[0].currentTime = 0;
            $('#Crash2')[0].play();
         }else if(e.keyCode == 54){
            $('#RideBell')[0].currentTime = 0;
            $('#RideBell')[0].play();
         }else if(e.keyCode == 55){
            $('#RideEdge')[0].currentTime = 0;
            $('#RideEdge')[0].play();
         }else if(e.keyCode == 56){
            $('#Snap')[0].currentTime = 0;
            $('#Snap')[0].play();
         }else if(e.keyCode == 57){
            $('#Claps')[0].currentTime = 0;
            $('#Claps')[0].play();
         }else if(e.keyCode == 48){
            $('#SFX')[0].currentTime = 0;
            $('#SFX')[0].play();
         }else if(e.keyCode == 80){
            $('#CymbalFX')[0].currentTime = 0;
            $('#CymbalFX')[0].play();
         }else if(e.keyCode == 219){
            $('#Fx2')[0].currentTime = 0;
            $('#Fx2')[0].play();
         }else if(e.keyCode == 112){
            $('#Kick')[0].currentTime = 0;
            $('#Kick')[0].play();   
         }else if(e.keyCode == 113){
            $('#Kick')[0].currentTime = 0;
            $('#Kick')[0].play();   
         }else if(e.keyCode == 114){
            $('#Kick')[0].currentTime = 0;
            $('#Kick')[0].play();   
         }else if(e.keyCode == 115){
            $('#Kick')[0].currentTime = 0;
            $('#Kick')[0].play();   
         }else if(e.keyCode == 116){
            $('#Kick')[0].currentTime = 0;
            $('#Kick')[0].play();   
         }else if(e.keyCode == 117){
            $('#Kick')[0].currentTime = 0;
            $('#Kick')[0].play();   
         }else if(e.keyCode == 118){
            $('#Snare')[0].currentTime = 0;
            $('#Snare')[0].play();
         }else if(e.keyCode == 119){
            $('#Snare')[0].currentTime = 0;
            $('#Snare')[0].play();
         }else if(e.keyCode == 120){
            $('#Snare')[0].currentTime = 0;
            $('#Snare')[0].play();
         }else if(e.keyCode == 121){
            $('#Snare')[0].currentTime = 0;
            $('#Snare')[0].play();
         }else if(e.keyCode == 122){
            $('#Snare')[0].currentTime = 0;
            $('#Snare')[0].play();
         }else if(e.keyCode == 123){
            $('#Snare')[0].currentTime = 0;
            $('#Snare')[0].play();
         }                                                  
        });
        switch(pianoOrBass){
        case 0:  
            switch(countValue){
                case 1:
                    $(window).on('keydown.oct',function(e){
                        if(e.keyCode == 90){
                            $('#C3')[0].currentTime = 0;
                            $('#C3')[0].play();   
                        }else if(e.keyCode == 83){
                            $('#Cs3')[0].currentTime = 0;
                            $('#Cs3')[0].play();   
                        }else if(e.keyCode == 88){
                            $('#D3')[0].currentTime = 0;
                            $('#D3')[0].play();   
                        }else if(e.keyCode == 68){
                            $('#Ds3')[0].currentTime = 0;
                            $('#Ds3')[0].play();   
                        }else if(e.keyCode == 67){
                            $('#E3')[0].currentTime = 0;
                            $('#E3')[0].play();
                        }else if(e.keyCode == 86){
                            $('#F3')[0].currentTime = 0;
                            $('#F3')[0].play();
                        }else if(e.keyCode == 71){
                            $('#Fs3')[0].currentTime = 0;
                            $('#Fs3')[0].play();
                        }else if(e.keyCode == 66){
                            $('#G3')[0].currentTime = 0;
                            $('#G3')[0].play();
                        }else if(e.keyCode == 72){
                            $('#Gs3')[0].currentTime = 0;
                            $('#Gs3')[0].play();
                        }else if(e.keyCode == 78){
                            $('#A3')[0].currentTime = 0;
                            $('#A3')[0].play();
                        }else if(e.keyCode == 74){
                            $('#As3')[0].currentTime = 0;
                            $('#As3')[0].play();
                        }else if(e.keyCode == 77){
                            $('#B3')[0].currentTime = 0;
                            $('#B3')[0].play();
                        }else if(e.keyCode == 188){
                            $('#C4')[0].currentTime = 0;
                            $('#C4')[0].play();
                        }else if(e.keyCode == 76){
                            $('#Cs4')[0].currentTime = 0;
                            $('#Cs4')[0].play();
                        }else if(e.keyCode == 190){
                            $('#D4')[0].currentTime = 0;
                            $('#D4')[0].play();
                        }else if(e.keyCode == 187){
                            $('#Ds4')[0].currentTime = 0;
                            $('#Ds4')[0].play();
                        }else if(e.keyCode == 191){
                            $('#E4')[0].currentTime = 0;
                            $('#E4')[0].play();
                        }
                    });
                    break;
                case 2:
                    $(window).on('keydown.oct',function(e){
                        if(e.keyCode == 90){
                            $('#C4')[0].currentTime = 0;
                            $('#C4')[0].play();   
                        }else if(e.keyCode == 83){
                            $('#Cs4')[0].currentTime = 0;
                            $('#Cs4')[0].play();   
                        }else if(e.keyCode == 88){
                            $('#D4')[0].currentTime = 0;
                            $('#D4')[0].play();   
                        }else if(e.keyCode == 68){
                            $('#Ds4')[0].currentTime = 0;
                            $('#Ds4')[0].play();   
                        }else if(e.keyCode == 67){
                            $('#E4')[0].currentTime = 0;
                            $('#E4')[0].play();
                        }else if(e.keyCode == 86){
                            $('#F4')[0].currentTime = 0;
                            $('#F4')[0].play();
                        }else if(e.keyCode == 71){
                            $('#Fs4')[0].currentTime = 0;
                            $('#Fs4')[0].play();
                        }else if(e.keyCode == 66){
                            $('#G4')[0].currentTime = 0;
                            $('#G4')[0].play();
                        }else if(e.keyCode == 72){
                            $('#Gs4')[0].currentTime = 0;
                            $('#Gs4')[0].play();
                        }else if(e.keyCode == 78){
                            $('#A4')[0].currentTime = 0;
                            $('#A4')[0].play();
                        }else if(e.keyCode == 74){
                            $('#As4')[0].currentTime = 0;
                            $('#As4')[0].play();
                        }else if(e.keyCode == 77){
                            $('#B4')[0].currentTime = 0;
                            $('#B4')[0].play();
                        }else if(e.keyCode == 188){
                            $('#C5')[0].currentTime = 0;
                            $('#C5')[0].play();
                        }else if(e.keyCode == 76){
                            $('#Cs5')[0].currentTime = 0;
                            $('#Cs5')[0].play();
                        }else if(e.keyCode == 190){
                            $('#D5')[0].currentTime = 0;
                            $('#D5')[0].play();
                        }else if(e.keyCode == 187){
                            $('#Ds5')[0].currentTime = 0;
                            $('#Ds5')[0].play();
                        }else if(e.keyCode == 191){
                            $('#E5')[0].currentTime = 0;
                            $('#E5')[0].play();
                        }
                    });
                    break;  
                case 3:
                    $(window).on('keydown.oct',function(e){
                        if(e.keyCode == 90){
                            $('#C5')[0].currentTime = 0;
                            $('#C5')[0].play();   
                        }else if(e.keyCode == 83){
                            $('#Cs5')[0].currentTime = 0;
                            $('#Cs5')[0].play();   
                        }else if(e.keyCode == 88){
                            $('#D5')[0].currentTime = 0;
                            $('#D5')[0].play();   
                        }else if(e.keyCode == 68){
                            $('#Ds5')[0].currentTime = 0;
                            $('#Ds5')[0].play();   
                        }else if(e.keyCode == 67){
                            $('#E5')[0].currentTime = 0;
                            $('#E5')[0].play();
                        }else if(e.keyCode == 86){
                            $('#F5')[0].currentTime = 0;
                            $('#F5')[0].play();
                        }else if(e.keyCode == 71){
                            $('#Fs5')[0].currentTime = 0;
                            $('#Fs5')[0].play();
                        }else if(e.keyCode == 66){
                            $('#G5')[0].currentTime = 0;
                            $('#G5')[0].play();
                        }else if(e.keyCode == 72){
                            $('#Gs5')[0].currentTime = 0;
                            $('#Gs5')[0].play();
                        }else if(e.keyCode == 78){
                            $('#A5')[0].currentTime = 0;
                            $('#A5')[0].play();
                        }else if(e.keyCode == 74){
                            $('#As5')[0].currentTime = 0;
                            $('#As5')[0].play();
                        }else if(e.keyCode == 77){
                            $('#B5')[0].currentTime = 0;
                            $('#B5')[0].play();
                        }else if(e.keyCode == 188){
                            $('#C6')[0].currentTime = 0;
                            $('#C6')[0].play();
                        }else if(e.keyCode == 76){
                            $('#Cs6')[0].currentTime = 0;
                            $('#Cs6')[0].play();
                        }else if(e.keyCode == 190){
                            $('#D6')[0].currentTime = 0;
                            $('#D6')[0].play();
                        }else if(e.keyCode == 187){
                            $('#Ds6')[0].currentTime = 0;
                            $('#Ds6')[0].play();
                        }else if(e.keyCode == 191){
                            $('#E6')[0].currentTime = 0;
                            $('#E6')[0].play();
                        }
                    });
                    break;
                case 4:
                    $(window).on('keydown.oct',function(e){
                        if(e.keyCode == 90){
                            $('#C6')[0].currentTime = 0;
                            $('#C6')[0].play();   
                        }else if(e.keyCode == 83){
                            $('#Cs6')[0].currentTime = 0;
                            $('#Cs6')[0].play();   
                        }else if(e.keyCode == 88){
                            $('#D6')[0].currentTime = 0;
                            $('#D6')[0].play();   
                        }else if(e.keyCode == 68){
                            $('#Ds6')[0].currentTime = 0;
                            $('#Ds6')[0].play();   
                        }else if(e.keyCode == 67){
                            $('#E6')[0].currentTime = 0;
                            $('#E6')[0].play();
                        }else if(e.keyCode == 86){
                            $('#F6')[0].currentTime = 0;
                            $('#F6')[0].play();
                        }else if(e.keyCode == 71){
                            $('#Fs6')[0].currentTime = 0;
                            $('#Fs6')[0].play();
                        }else if(e.keyCode == 66){
                            $('#G6')[0].currentTime = 0;
                            $('#G6')[0].play();
                        }else if(e.keyCode == 72){
                            $('#Gs6')[0].currentTime = 0;
                            $('#Gs6')[0].play();
                        }else if(e.keyCode == 78){
                            $('#A6')[0].currentTime = 0;
                            $('#A6')[0].play();
                        }else if(e.keyCode == 74){
                            $('#As6')[0].currentTime = 0;
                            $('#As6')[0].play();
                        }else if(e.keyCode == 77){
                            $('#B6')[0].currentTime = 0;
                            $('#B6')[0].play();
                        }else if(e.keyCode == 188){
                            $('#C7')[0].currentTime = 0;
                            $('#C7')[0].play();
                        }else if(e.keyCode == 76){
                            null;
                        }else if(e.keyCode == 190){
                            null;
                        }else if(e.keyCode == 187){
                            null;
                        }else if(e.keyCode == 191){
                            null;
                        }
                    });
                    break;
                case -1:
                    $(window).on('keydown.oct',function(e){
                        if(e.keyCode == 90){
                            $('#C1')[0].currentTime = 0;
                            $('#C1')[0].play();   
                        }else if(e.keyCode == 83){
                            $('#Cs1')[0].currentTime = 0;
                            $('#Cs1')[0].play();   
                        }else if(e.keyCode == 88){
                            $('#D1')[0].currentTime = 0;
                            $('#D1')[0].play();   
                        }else if(e.keyCode == 68){
                            $('#Ds1')[0].currentTime = 0;
                            $('#Ds1')[0].play();   
                        }else if(e.keyCode == 67){
                            $('#E1')[0].currentTime = 0;
                            $('#E1')[0].play();
                        }else if(e.keyCode == 86){
                            $('#F1')[0].currentTime = 0;
                            $('#F1')[0].play();
                        }else if(e.keyCode == 71){
                            $('#Fs1')[0].currentTime = 0;
                            $('#Fs1')[0].play();
                        }else if(e.keyCode == 66){
                            $('#G1')[0].currentTime = 0;
                            $('#G1')[0].play();
                        }else if(e.keyCode == 72){
                            $('#Gs1')[0].currentTime = 0;
                            $('#Gs1')[0].play();
                        }else if(e.keyCode == 78){
                            $('#A1')[0].currentTime = 0;
                            $('#A1')[0].play();
                        }else if(e.keyCode == 74){
                            $('#As1')[0].currentTime = 0;
                            $('#As1')[0].play();
                        }else if(e.keyCode == 77){
                            $('#B1')[0].currentTime = 0;
                            $('#B1')[0].play();
                        }else if(e.keyCode == 188){
                            $('#C2')[0].currentTime = 0;
                            $('#C2')[0].play();
                        }else if(e.keyCode == 76){
                            $('#Cs2')[0].currentTime = 0;
                            $('#Cs2')[0].play();
                        }else if(e.keyCode == 190){
                            $('#D2')[0].currentTime = 0;
                            $('#D2')[0].play();
                        }else if(e.keyCode == 187){
                            $('#Ds2')[0].currentTime = 0;
                            $('#Ds2')[0].play();
                        }else if(e.keyCode == 191){
                            $('#E2')[0].currentTime = 0;
                            $('#E2')[0].play();
                        }
                    });
                    break;
                case -2:
                    $(window).on('keydown.oct',function(e){
                        if(e.keyCode == 90){
                            $('#C0')[0].currentTime = 0;
                            $('#C0')[0].play();   
                        }else if(e.keyCode == 83){
                            $('#Cs0')[0].currentTime = 0;
                            $('#Cs0')[0].play();   
                        }else if(e.keyCode == 88){
                            $('#D0')[0].currentTime = 0;
                            $('#D0')[0].play();   
                        }else if(e.keyCode == 68){
                            $('#Ds0')[0].currentTime = 0;
                            $('#Ds0')[0].play();   
                        }else if(e.keyCode == 67){
                            $('#E0')[0].currentTime = 0;
                            $('#E0')[0].play();
                        }else if(e.keyCode == 86){
                            $('#F0')[0].currentTime = 0;
                            $('#F0')[0].play();
                        }else if(e.keyCode == 71){
                            $('#Fs0')[0].currentTime = 0;
                            $('#Fs0')[0].play();
                        }else if(e.keyCode == 66){
                            $('#G0')[0].currentTime = 0;
                            $('#G0')[0].play();
                        }else if(e.keyCode == 72){
                            $('#Gs0')[0].currentTime = 0;
                            $('#Gs0')[0].play();
                        }else if(e.keyCode == 78){
                            $('#A0')[0].currentTime = 0;
                            $('#A0')[0].play();
                        }else if(e.keyCode == 74){
                            $('#As0')[0].currentTime = 0;
                            $('#As0')[0].play();
                        }else if(e.keyCode == 77){
                            $('#B0')[0].currentTime = 0;
                            $('#B0')[0].play();
                        }else if(e.keyCode == 188){
                            $('#C1')[0].currentTime = 0;
                            $('#C1')[0].play();
                        }else if(e.keyCode == 76){
                            $('#Cs1')[0].currentTime = 0;
                            $('#Cs1')[0].play();
                        }else if(e.keyCode == 190){
                            $('#D1')[0].currentTime = 0;
                            $('#D1')[0].play();
                        }else if(e.keyCode == 187){
                            $('#Ds1')[0].currentTime = 0;
                            $('#Ds1')[0].play();
                        }else if(e.keyCode == 191){
                            $('#E1')[0].currentTime = 0;
                            $('#E1')[0].play();
                        }
                    });
                    break; 
                case 0:
                    $(window).on('keydown.oct',function(e){
                        if(e.keyCode == 90){
                            $('#C2')[0].currentTime = 0;
                            $('#C2')[0].play();   
                        }else if(e.keyCode == 83){
                            $('#Cs2')[0].currentTime = 0;
                            $('#Cs2')[0].play();   
                        }else if(e.keyCode == 88){
                            $('#D2')[0].currentTime = 0;
                            $('#D2')[0].play();   
                        }else if(e.keyCode == 68){
                            $('#Ds2')[0].currentTime = 0;
                            $('#Ds2')[0].play();   
                        }else if(e.keyCode == 67){
                            $('#E2')[0].currentTime = 0;
                            $('#E2')[0].play();
                        }else if(e.keyCode == 86){
                            $('#F2')[0].currentTime = 0;
                            $('#F2')[0].play();
                        }else if(e.keyCode == 71){
                            $('#Fs2')[0].currentTime = 0;
                            $('#Fs2')[0].play();
                        }else if(e.keyCode == 66){
                            $('#G2')[0].currentTime = 0;
                            $('#G2')[0].play();
                        }else if(e.keyCode == 72){
                            $('#Gs2')[0].currentTime = 0;
                            $('#Gs2')[0].play();
                        }else if(e.keyCode == 78){
                            $('#A2')[0].currentTime = 0;
                            $('#A2')[0].play();
                        }else if(e.keyCode == 74){
                            $('#As2')[0].currentTime = 0;
                            $('#As2')[0].play();
                        }else if(e.keyCode == 77){
                            $('#B2')[0].currentTime = 0;
                            $('#B2')[0].play();
                        }else if(e.keyCode == 188){
                            $('#C3')[0].currentTime = 0;
                            $('#C3')[0].play();
                        }else if(e.keyCode == 76){
                            $('#Cs3')[0].currentTime = 0;
                            $('#Cs3')[0].play();
                        }else if(e.keyCode == 190){
                            $('#D3')[0].currentTime = 0;
                            $('#D3')[0].play();
                        }else if(e.keyCode == 187){
                            $('#Ds3')[0].currentTime = 0;
                            $('#Ds3')[0].play();
                        }else if(e.keyCode == 191){
                            $('#E3')[0].currentTime = 0;
                            $('#E3')[0].play();
                        }
                    });    
                    break;
            }
            break;
        case 1:
            switch(countValue){
                case 0:
                    $(window).on('keydown.oct',function(e){
                        if(e.keyCode == 90){
                            $('#bC1')[0].volume = 0.3;
                            $('#bC1')[0].currentTime = 0;
                            $('#bC1')[0].play();   
                        }else if(e.keyCode == 83){
                            $('#bCs1')[0].volume = 0.3;
                            $('#bCs1')[0].currentTime = 0;
                            $('#bCs1')[0].play();   
                        }else if(e.keyCode == 88){
                            $('#bD1')[0].volume = 0.3;
                            $('#bD1')[0].currentTime = 0;
                            $('#bD1')[0].play();   
                        }else if(e.keyCode == 68){
                            $('#bDs1')[0].volume = 0.3;
                            $('#bDs1')[0].currentTime = 0;
                            $('#bDs1')[0].play();   
                        }else if(e.keyCode == 67){
                            $('#bE1')[0].volume = 0.3;
                            $('#bE1')[0].currentTime = 0;
                            $('#bE1')[0].play();
                        }else if(e.keyCode == 86){
                            $('#bF1')[0].volume = 0.3;
                            $('#bF1')[0].currentTime = 0;
                            $('#bF1')[0].play();
                        }else if(e.keyCode == 71){
                            $('#bFs1')[0].volume = 0.3;
                            $('#bFs1')[0].currentTime = 0;
                            $('#bFs1')[0].play();
                        }else if(e.keyCode == 66){
                            $('#bG1')[0].volume = 0.3;
                            $('#bG1')[0].currentTime = 0;
                            $('#bG1')[0].play();
                        }else if(e.keyCode == 72){
                            $('#bGs1')[0].volume = 0.3;
                            $('#bGs1')[0].currentTime = 0;
                            $('#bGs1')[0].play();
                        }else if(e.keyCode == 78){
                            $('#bA1')[0].volume = 0.3;
                            $('#bA1')[0].currentTime = 0;
                            $('#bA1')[0].play();
                        }else if(e.keyCode == 74){
                            $('#bAs1')[0].volume = 0.3;
                            $('#bAs1')[0].currentTime = 0;
                            $('#bAs1')[0].play();
                        }else if(e.keyCode == 77){
                            $('#bB1')[0].volume = 0.3;
                            $('#bB1')[0].currentTime = 0;
                            $('#bB1')[0].play();
                        }else if(e.keyCode == 188){
                            $('#bC2')[0].volume = 0.3;
                            $('#bC2')[0].currentTime = 0;
                            $('#bC2')[0].play();
                        }else if(e.keyCode == 76){
                            $('#bCs2')[0].volume = 0.3;
                            $('#bCs2')[0].currentTime = 0;
                            $('#bCs2')[0].play();
                        }else if(e.keyCode == 190){
                            $('#bD2')[0].volume = 0.3;
                            $('#bD2')[0].currentTime = 0;
                            $('#bD2')[0].play();
                        }else if(e.keyCode == 187){
                            $('#bDs2')[0].volume = 0.3;
                            $('#bDs2')[0].currentTime = 0;
                            $('#bDs2')[0].play();
                        }else if(e.keyCode == 191){
                            $('#bE2')[0].volume = 0.3;
                            $('#bE2')[0].currentTime = 0;
                            $('#bE2')[0].play();
                        }
                    });
                    break;
                case 1:
                    $(window).on('keydown.oct',function(e){
                        if(e.keyCode == 90){
                            $('#bC2')[0].volume = 0.3;
                            $('#bC2')[0].currentTime = 0;
                            $('#bC2')[0].play();   
                        }else if(e.keyCode == 83){
                            $('#bCs2')[0].volume = 0.3;
                            $('#bCs2')[0].currentTime = 0;
                            $('#bCs2')[0].play();   
                        }else if(e.keyCode == 88){
                            $('#bD2')[0].volume = 0.3;
                            $('#bD2')[0].currentTime = 0;
                            $('#bD2')[0].play();   
                        }else if(e.keyCode == 68){
                            $('#bDs2')[0].volume = 0.3;
                            $('#bDs2')[0].currentTime = 0;
                            $('#bDs2')[0].play();   
                        }else if(e.keyCode == 67){
                            $('#bE2')[0].volume = 0.3;
                            $('#bE2')[0].currentTime = 0;
                            $('#bE2')[0].play();
                        }else if(e.keyCode == 86){
                            $('#bF2')[0].volume = 0.3;
                            $('#bF2')[0].currentTime = 0;
                            $('#bF2')[0].play();
                        }else if(e.keyCode == 71){
                            $('#bFs2')[0].volume = 0.3;
                            $('#bFs2')[0].currentTime = 0;
                            $('#bFs2')[0].play();
                        }else if(e.keyCode == 66){
                            $('#bG2')[0].volume = 0.3;
                            $('#bG2')[0].currentTime = 0;
                            $('#bG2')[0].play();
                        }else if(e.keyCode == 72){
                            $('#bGs2')[0].volume = 0.3;
                            $('#bGs2')[0].currentTime = 0;
                            $('#bGs2')[0].play();
                        }else if(e.keyCode == 78){
                            $('#bA2')[0].volume = 0.3;
                            $('#bA2')[0].currentTime = 0;
                            $('#bA2')[0].play();
                        }else if(e.keyCode == 74){
                            $('#bAs2')[0].volume = 0.3;
                            $('#bAs2')[0].currentTime = 0;
                            $('#bAs2')[0].play();
                        }else if(e.keyCode == 77){
                            $('#bB2')[0].volume = 0.3;
                            $('#bB2')[0].currentTime = 0;
                            $('#bB2')[0].play();
                        }else if(e.keyCode == 188){
                            $('#bC3')[0].volume = 0.3;
                            $('#bC3')[0].currentTime = 0;
                            $('#bC3')[0].play();
                        }else if(e.keyCode == 76){
                            $('#bCs3')[0].volume = 0.3;
                            $('#bCs3')[0].currentTime = 0;
                            $('#bCs3')[0].play();
                        }else if(e.keyCode == 190){
                            $('#bD3')[0].volume = 0.3;
                            $('#bD3')[0].currentTime = 0;
                            $('#bD3')[0].play();
                        }else if(e.keyCode == 187){
                            $('#bDs3')[0].volume = 0.3;
                            $('#bDs3')[0].currentTime = 0;
                            $('#bDs3')[0].play();
                        }else if(e.keyCode == 191){
                            $('#bE3')[0].volume = 0.3;
                            $('#bE3')[0].currentTime = 0;
                            $('#bE3')[0].play();
                        }
                    });
                    break;  
                case 2:
                    $(window).on('keydown.oct',function(e){
                        if(e.keyCode == 90){
                            $('#bC3')[0].volume = 0.3;
                            $('#bC3')[0].currentTime = 0;
                            $('#bC3')[0].play();   
                        }else if(e.keyCode == 83){
                            $('#bCs3')[0].volume = 0.3;
                            $('#bCs3')[0].currentTime = 0;
                            $('#bCs3')[0].play();   
                        }else if(e.keyCode == 88){
                            $('#bD3')[0].volume = 0.3;
                            $('#bD3')[0].currentTime = 0;
                            $('#bD3')[0].play();   
                        }else if(e.keyCode == 68){
                            $('#bDs3')[0].volume = 0.3;
                            $('#bDs3')[0].currentTime = 0;
                            $('#bDs3')[0].play();   
                        }else if(e.keyCode == 67){
                            $('#bE3')[0].volume = 0.3;
                            $('#bE3')[0].currentTime = 0;
                            $('#bE3')[0].play();
                        }else if(e.keyCode == 86){
                            $('#bF3')[0].volume = 0.3;
                            $('#bF3')[0].currentTime = 0;
                            $('#bF3')[0].play();
                        }else if(e.keyCode == 71){
                            $('#bFs3')[0].volume = 0.3;
                            $('#bFs3')[0].currentTime = 0;
                            $('#bFs3')[0].play();
                        }else if(e.keyCode == 66){
                            $('#bG3')[0].volume = 0.3;
                            $('#bG3')[0].currentTime = 0;
                            $('#bG3')[0].play();
                        }else if(e.keyCode == 72){
                            $('#bGs3')[0].volume = 0.3;
                            $('#bGs3')[0].currentTime = 0;
                            $('#bGs3')[0].play();
                        }else if(e.keyCode == 78){
                            $('#bA3')[0].volume = 0.3;
                            $('#bA3')[0].currentTime = 0;
                            $('#bA3')[0].play();
                        }else if(e.keyCode == 74){
                            $('#bAs3')[0].volume = 0.3;
                            $('#bAs3')[0].currentTime = 0;
                            $('#bAs3')[0].play();
                        }else if(e.keyCode == 77){
                            $('#bB3')[0].volume = 0.3;
                            $('#bB3')[0].currentTime = 0;
                            $('#bB3')[0].play();
                        }else if(e.keyCode == 188){
                            $('#bC4')[0].volume = 0.3;
                            $('#bC4')[0].currentTime = 0;
                            $('#bC4')[0].play();
                        }else if(e.keyCode == 76){
                            $('#bCs4')[0].volume = 0.3;
                            $('#bCs4')[0].currentTime = 0;
                            $('#bCs4')[0].play();
                        }else if(e.keyCode == 190){
                            $('#bD4')[0].volume = 0.3;
                            $('#bD4')[0].currentTime = 0;
                            $('#bD4')[0].play();
                        }else if(e.keyCode == 187){
                            $('#bDs4')[0].volume = 0.3;
                            $('#bDs4')[0].currentTime = 0;
                            $('#bDs4')[0].play();
                        }else if(e.keyCode == 191){
                            $('#bE4')[0].volume = 0.3;
                            $('#bE4')[0].currentTime = 0;
                            $('#bE4')[0].play();
                        }
                    });
                    break;
                }
            break;
        }
        break;
       case 1:
       $(window).off('keydown.drm');
        switch(countValue){
            case 0:
                $(window).on('keydown.oct',function(e){
                    if(e.keyCode == 90){
                        $('#C2')[0].currentTime = 0;
                        $('#C2')[0].play();   
                    }else if(e.keyCode == 83){
                        $('#Cs2')[0].currentTime = 0;
                        $('#Cs2')[0].play();   
                    }else if(e.keyCode == 88){
                        $('#D2')[0].currentTime = 0;
                        $('#D2')[0].play();   
                    }else if(e.keyCode == 68){
                        $('#Ds2')[0].currentTime = 0;
                        $('#Ds2')[0].play();   
                    }else if(e.keyCode == 67){
                        $('#E2')[0].currentTime = 0;
                        $('#E2')[0].play();
                    }else if(e.keyCode == 86){
                        $('#F2')[0].currentTime = 0;
                        $('#F2')[0].play();
                    }else if(e.keyCode == 71){
                        $('#Fs2')[0].currentTime = 0;
                        $('#Fs2')[0].play();
                    }else if(e.keyCode == 66){
                        $('#G2')[0].currentTime = 0;
                        $('#G2')[0].play();
                    }else if(e.keyCode == 72){
                        $('#Gs2')[0].currentTime = 0;
                        $('#Gs2')[0].play();
                    }else if(e.keyCode == 78){
                        $('#A2')[0].currentTime = 0;
                        $('#A2')[0].play();
                    }else if(e.keyCode == 74){
                        $('#As2')[0].currentTime = 0;
                        $('#As2')[0].play();
                    }else if(e.keyCode == 77){
                        $('#B2')[0].currentTime = 0;
                        $('#B2')[0].play();
                    }else if(e.keyCode == 188){
                        $('#C3')[0].currentTime = 0;
                        $('#C3')[0].play();
                    }else if(e.keyCode == 76){
                        $('#Cs3')[0].currentTime = 0;
                        $('#Cs3')[0].play();
                    }else if(e.keyCode == 190){
                        $('#D3')[0].currentTime = 0;
                        $('#D3')[0].play();
                    }else if(e.keyCode == 187){
                        $('#Ds3')[0].currentTime = 0;
                        $('#Ds3')[0].play();
                    }else if(e.keyCode == 191){
                        $('#E3')[0].currentTime = 0;
                        $('#E3')[0].play();
                    }else if(e.keyCode == 81){
                        $('#C3')[0].currentTime = 0;
                        $('#C3')[0].play();
                    }else if(e.keyCode == 87){
                        $('#D3')[0].currentTime = 0;
                        $('#D3')[0].play();
                    }else if(e.keyCode == 69){
                        $('#E3')[0].currentTime = 0;
                        $('#E3')[0].play();
                    }else if(e.keyCode == 82){
                        $('#F3')[0].currentTime = 0;
                        $('#F3')[0].play();
                    }else if(e.keyCode == 84){
                        $('#G3')[0].currentTime = 0;
                        $('#G3')[0].play();
                    }else if(e.keyCode == 89){
                        $('#A3')[0].currentTime = 0;
                        $('#A3')[0].play();
                    }else if(e.keyCode == 85){
                        $('#B3')[0].currentTime = 0;
                        $('#B3')[0].play();
                    }else if(e.keyCode == 73){
                        $('#C4')[0].currentTime = 0;
                        $('#C4')[0].play();
                    }else if(e.keyCode == 79){
                        $('#D4')[0].currentTime = 0;
                        $('#D4')[0].play();
                    }else if(e.keyCode == 50){
                        $('#Cs3')[0].currentTime = 0;
                        $('#Cs3')[0].play();
                    }else if(e.keyCode == 51){
                        $('#Ds3')[0].currentTime = 0;
                        $('#Ds3')[0].play();
                    }else if(e.keyCode == 53){
                        $('#Fs3')[0].currentTime = 0;
                        $('#Fs3')[0].play();
                    }else if(e.keyCode == 54){
                        $('#Gs3')[0].currentTime = 0;
                        $('#Gs3')[0].play();
                    }else if(e.keyCode == 55){
                        $('#As3')[0].currentTime = 0;
                        $('#As3')[0].play();
                    }else if(e.keyCode == 57){
                        $('#Cs4')[0].currentTime = 0;
                        $('#Cs4')[0].play();
                    }else if(e.keyCode == 48){
                        $('#Ds4')[0].currentTime = 0;
                        $('#Ds4')[0].play();
                    }else if(e.keyCode == 80){
                        $('#E4')[0].currentTime = 0;
                        $('#E4')[0].play();
                    }else if(e.keyCode == 219){
                        $('#F4')[0].currentTime = 0;
                        $('#F4')[0].play();
                    }
                });    
                break;
            case 1:
                $(window).on('keydown.oct',function(e){
                    if(e.keyCode == 90){
                        $('#C3')[0].currentTime = 0;
                        $('#C3')[0].play();   
                    }else if(e.keyCode == 83){
                        $('#Cs3')[0].currentTime = 0;
                        $('#Cs3')[0].play();   
                    }else if(e.keyCode == 88){
                        $('#D3')[0].currentTime = 0;
                        $('#D3')[0].play();   
                    }else if(e.keyCode == 68){
                        $('#Ds3')[0].currentTime = 0;
                        $('#Ds3')[0].play();   
                    }else if(e.keyCode == 67){
                        $('#E3')[0].currentTime = 0;
                        $('#E3')[0].play();
                    }else if(e.keyCode == 86){
                        $('#F3')[0].currentTime = 0;
                        $('#F3')[0].play();
                    }else if(e.keyCode == 71){
                        $('#Fs3')[0].currentTime = 0;
                        $('#Fs3')[0].play();
                    }else if(e.keyCode == 66){
                        $('#G3')[0].currentTime = 0;
                        $('#G3')[0].play();
                    }else if(e.keyCode == 72){
                        $('#Gs3')[0].currentTime = 0;
                        $('#Gs3')[0].play();
                    }else if(e.keyCode == 78){
                        $('#A3')[0].currentTime = 0;
                        $('#A3')[0].play();
                    }else if(e.keyCode == 74){
                        $('#As3')[0].currentTime = 0;
                        $('#As3')[0].play();
                    }else if(e.keyCode == 77){
                        $('#B3')[0].currentTime = 0;
                        $('#B3')[0].play();
                    }else if(e.keyCode == 188){
                        $('#C4')[0].currentTime = 0;
                        $('#C4')[0].play();
                    }else if(e.keyCode == 76){
                        $('#Cs4')[0].currentTime = 0;
                        $('#Cs4')[0].play();
                    }else if(e.keyCode == 190){
                        $('#D4')[0].currentTime = 0;
                        $('#D4')[0].play();
                    }else if(e.keyCode == 187){
                        $('#Ds4')[0].currentTime = 0;
                        $('#Ds4')[0].play();
                    }else if(e.keyCode == 191){
                        $('#E4')[0].currentTime = 0;
                        $('#E4')[0].play();
                    }else if(e.keyCode == 81){
                        $('#C4')[0].currentTime = 0;
                        $('#C4')[0].play();
                    }else if(e.keyCode == 87){
                        $('#D4')[0].currentTime = 0;
                        $('#D4')[0].play();
                    }else if(e.keyCode == 69){
                        $('#E4')[0].currentTime = 0;
                        $('#E4')[0].play();
                    }else if(e.keyCode == 82){
                        $('#F4')[0].currentTime = 0;
                        $('#F4')[0].play();
                    }else if(e.keyCode == 84){
                        $('#G4')[0].currentTime = 0;
                        $('#G4')[0].play();
                    }else if(e.keyCode == 89){
                        $('#A4')[0].currentTime = 0;
                        $('#A4')[0].play();
                    }else if(e.keyCode == 85){
                        $('#B4')[0].currentTime = 0;
                        $('#B4')[0].play();
                    }else if(e.keyCode == 73){
                        $('#C5')[0].currentTime = 0;
                        $('#C5')[0].play();
                    }else if(e.keyCode == 79){
                        $('#D5')[0].currentTime = 0;
                        $('#D5')[0].play();
                    }else if(e.keyCode == 50){
                        $('#Cs4')[0].currentTime = 0;
                        $('#Cs4')[0].play();
                    }else if(e.keyCode == 51){
                        $('#Ds4')[0].currentTime = 0;
                        $('#Ds4')[0].play();
                    }else if(e.keyCode == 53){
                        $('#Fs4')[0].currentTime = 0;
                        $('#Fs4')[0].play();
                    }else if(e.keyCode == 54){
                        $('#Gs4')[0].currentTime = 0;
                        $('#Gs4')[0].play();
                    }else if(e.keyCode == 55){
                        $('#As4')[0].currentTime = 0;
                        $('#As4')[0].play();
                    }else if(e.keyCode == 57){
                        $('#Cs5')[0].currentTime = 0;
                        $('#Cs5')[0].play();
                    }else if(e.keyCode == 48){
                        $('#Ds5')[0].currentTime = 0;
                        $('#Ds5')[0].play();
                    }else if(e.keyCode == 80){
                        $('#E5')[0].currentTime = 0;
                        $('#E5')[0].play();
                    }else if(e.keyCode == 219){
                        $('#F5')[0].currentTime = 0;
                        $('#F5')[0].play();
                    }
                });    
                break;
            case 2:
                $(window).on('keydown.oct',function(e){
                    if(e.keyCode == 90){
                        $('#C4')[0].currentTime = 0;
                        $('#C4')[0].play();   
                    }else if(e.keyCode == 83){
                        $('#Cs4')[0].currentTime = 0;
                        $('#Cs4')[0].play();   
                    }else if(e.keyCode == 88){
                        $('#D4')[0].currentTime = 0;
                        $('#D4')[0].play();   
                    }else if(e.keyCode == 68){
                        $('#Ds4')[0].currentTime = 0;
                        $('#Ds4')[0].play();   
                    }else if(e.keyCode == 67){
                        $('#E4')[0].currentTime = 0;
                        $('#E4')[0].play();
                    }else if(e.keyCode == 86){
                        $('#F4')[0].currentTime = 0;
                        $('#F4')[0].play();
                    }else if(e.keyCode == 71){
                        $('#Fs4')[0].currentTime = 0;
                        $('#Fs4')[0].play();
                    }else if(e.keyCode == 66){
                        $('#G4')[0].currentTime = 0;
                        $('#G4')[0].play();
                    }else if(e.keyCode == 72){
                        $('#Gs4')[0].currentTime = 0;
                        $('#Gs4')[0].play();
                    }else if(e.keyCode == 78){
                        $('#A4')[0].currentTime = 0;
                        $('#A4')[0].play();
                    }else if(e.keyCode == 74){
                        $('#As4')[0].currentTime = 0;
                        $('#As4')[0].play();
                    }else if(e.keyCode == 77){
                        $('#B4')[0].currentTime = 0;
                        $('#B4')[0].play();
                    }else if(e.keyCode == 188){
                        $('#C5')[0].currentTime = 0;
                        $('#C5')[0].play();
                    }else if(e.keyCode == 76){
                        $('#Cs5')[0].currentTime = 0;
                        $('#Cs5')[0].play();
                    }else if(e.keyCode == 190){
                        $('#D5')[0].currentTime = 0;
                        $('#D5')[0].play();
                    }else if(e.keyCode == 187){
                        $('#Ds5')[0].currentTime = 0;
                        $('#Ds5')[0].play();
                    }else if(e.keyCode == 191){
                        $('#E5')[0].currentTime = 0;
                        $('#E5')[0].play();
                    }else if(e.keyCode == 81){
                        $('#C5')[0].currentTime = 0;
                        $('#C5')[0].play();
                    }else if(e.keyCode == 87){
                        $('#D5')[0].currentTime = 0;
                        $('#D5')[0].play();
                    }else if(e.keyCode == 69){
                        $('#E5')[0].currentTime = 0;
                        $('#E5')[0].play();
                    }else if(e.keyCode == 82){
                        $('#F5')[0].currentTime = 0;
                        $('#F5')[0].play();
                    }else if(e.keyCode == 84){
                        $('#G5')[0].currentTime = 0;
                        $('#G5')[0].play();
                    }else if(e.keyCode == 89){
                        $('#A5')[0].currentTime = 0;
                        $('#A5')[0].play();
                    }else if(e.keyCode == 85){
                        $('#B5')[0].currentTime = 0;
                        $('#B5')[0].play();
                    }else if(e.keyCode == 73){
                        $('#C6')[0].currentTime = 0;
                        $('#C6')[0].play();
                    }else if(e.keyCode == 79){
                        $('#D6')[0].currentTime = 0;
                        $('#D6')[0].play();
                    }else if(e.keyCode == 50){
                        $('#Cs5')[0].currentTime = 0;
                        $('#Cs5')[0].play();
                    }else if(e.keyCode == 51){
                        $('#Ds5')[0].currentTime = 0;
                        $('#Ds5')[0].play();
                    }else if(e.keyCode == 53){
                        $('#Fs5')[0].currentTime = 0;
                        $('#Fs5')[0].play();
                    }else if(e.keyCode == 54){
                        $('#Gs5')[0].currentTime = 0;
                        $('#Gs5')[0].play();
                    }else if(e.keyCode == 55){
                        $('#As5')[0].currentTime = 0;
                        $('#As5')[0].play();
                    }else if(e.keyCode == 57){
                        $('#Cs6')[0].currentTime = 0;
                        $('#Cs6')[0].play();
                    }else if(e.keyCode == 48){
                        $('#Ds6')[0].currentTime = 0;
                        $('#Ds6')[0].play();
                    }else if(e.keyCode == 80){
                        $('#E6')[0].currentTime = 0;
                        $('#E6')[0].play();
                    }else if(e.keyCode == 219){
                        $('#F6')[0].currentTime = 0;
                        $('#F6')[0].play();
                    }
                });    
                break;
            case 3:
                $(window).on('keydown.oct',function(e){
                    if(e.keyCode == 90){
                        $('#C5')[0].currentTime = 0;
                        $('#C5')[0].play();   
                    }else if(e.keyCode == 83){
                        $('#Cs5')[0].currentTime = 0;
                        $('#Cs5')[0].play();   
                    }else if(e.keyCode == 88){
                        $('#D5')[0].currentTime = 0;
                        $('#D5')[0].play();   
                    }else if(e.keyCode == 68){
                        $('#Ds5')[0].currentTime = 0;
                        $('#Ds5')[0].play();   
                    }else if(e.keyCode == 67){
                        $('#E5')[0].currentTime = 0;
                        $('#E5')[0].play();
                    }else if(e.keyCode == 86){
                        $('#F5')[0].currentTime = 0;
                        $('#F5')[0].play();
                    }else if(e.keyCode == 71){
                        $('#Fs5')[0].currentTime = 0;
                        $('#Fs5')[0].play();
                    }else if(e.keyCode == 66){
                        $('#G5')[0].currentTime = 0;
                        $('#G5')[0].play();
                    }else if(e.keyCode == 72){
                        $('#Gs5')[0].currentTime = 0;
                        $('#Gs5')[0].play();
                    }else if(e.keyCode == 78){
                        $('#A5')[0].currentTime = 0;
                        $('#A5')[0].play();
                    }else if(e.keyCode == 74){
                        $('#As5')[0].currentTime = 0;
                        $('#As5')[0].play();
                    }else if(e.keyCode == 77){
                        $('#B5')[0].currentTime = 0;
                        $('#B5')[0].play();
                    }else if(e.keyCode == 188){
                        $('#C6')[0].currentTime = 0;
                        $('#C6')[0].play();
                    }else if(e.keyCode == 76){
                        $('#Cs6')[0].currentTime = 0;
                        $('#Cs6')[0].play();
                    }else if(e.keyCode == 190){
                        $('#D6')[0].currentTime = 0;
                        $('#D6')[0].play();
                    }else if(e.keyCode == 187){
                        $('#Ds6')[0].currentTime = 0;
                        $('#Ds6')[0].play();
                    }else if(e.keyCode == 191){
                        $('#E6')[0].currentTime = 0;
                        $('#E6')[0].play();
                    }else if(e.keyCode == 81){
                        $('#C6')[0].currentTime = 0;
                        $('#C6')[0].play();
                    }else if(e.keyCode == 87){
                        $('#D6')[0].currentTime = 0;
                        $('#D6')[0].play();
                    }else if(e.keyCode == 69){
                        $('#E6')[0].currentTime = 0;
                        $('#E6')[0].play();
                    }else if(e.keyCode == 82){
                        $('#F6')[0].currentTime = 0;
                        $('#F6')[0].play();
                    }else if(e.keyCode == 84){
                        $('#G6')[0].currentTime = 0;
                        $('#G6')[0].play();
                    }else if(e.keyCode == 89){
                        $('#A6')[0].currentTime = 0;
                        $('#A6')[0].play();
                    }else if(e.keyCode == 85){
                        $('#B6')[0].currentTime = 0;
                        $('#B6')[0].play();
                    }else if(e.keyCode == 73){
                        $('#C7')[0].currentTime = 0;
                        $('#C7')[0].play();
                    }else if(e.keyCode == 79){
                        null;
                    }else if(e.keyCode == 50){
                        $('#Cs6')[0].currentTime = 0;
                        $('#Cs6')[0].play();
                    }else if(e.keyCode == 51){
                        $('#Ds6')[0].currentTime = 0;
                        $('#Ds6')[0].play();
                    }else if(e.keyCode == 53){
                        $('#Fs6')[0].currentTime = 0;
                        $('#Fs6')[0].play();
                    }else if(e.keyCode == 54){
                        $('#Gs6')[0].currentTime = 0;
                        $('#Gs6')[0].play();
                    }else if(e.keyCode == 55){
                        $('#As6')[0].currentTime = 0;
                        $('#As6')[0].play();
                    }else if(e.keyCode == 57){
                        null;
                    }else if(e.keyCode == 48){
                        null;
                    }else if(e.keyCode == 80){
                        null;
                    }else if(e.keyCode == 219){
                        null;
                    }
                });    
                break;
            case -1:
                $(window).on('keydown.oct',function(e){
                    if(e.keyCode == 90){
                        $('#C1')[0].currentTime = 0;
                        $('#C1')[0].play();   
                    }else if(e.keyCode == 83){
                        $('#Cs1')[0].currentTime = 0;
                        $('#Cs1')[0].play();   
                    }else if(e.keyCode == 88){
                        $('#D1')[0].currentTime = 0;
                        $('#D1')[0].play();   
                    }else if(e.keyCode == 68){
                        $('#Ds1')[0].currentTime = 0;
                        $('#Ds1')[0].play();   
                    }else if(e.keyCode == 67){
                        $('#E1')[0].currentTime = 0;
                        $('#E1')[0].play();
                    }else if(e.keyCode == 86){
                        $('#F1')[0].currentTime = 0;
                        $('#F1')[0].play();
                    }else if(e.keyCode == 71){
                        $('#Fs1')[0].currentTime = 0;
                        $('#Fs1')[0].play();
                    }else if(e.keyCode == 66){
                        $('#G1')[0].currentTime = 0;
                        $('#G1')[0].play();
                    }else if(e.keyCode == 72){
                        $('#Gs1')[0].currentTime = 0;
                        $('#Gs1')[0].play();
                    }else if(e.keyCode == 78){
                        $('#A1')[0].currentTime = 0;
                        $('#A1')[0].play();
                    }else if(e.keyCode == 74){
                        $('#As1')[0].currentTime = 0;
                        $('#As1')[0].play();
                    }else if(e.keyCode == 77){
                        $('#B1')[0].currentTime = 0;
                        $('#B1')[0].play();
                    }else if(e.keyCode == 188){
                        $('#C2')[0].currentTime = 0;
                        $('#C2')[0].play();
                    }else if(e.keyCode == 76){
                        $('#Cs2')[0].currentTime = 0;
                        $('#Cs2')[0].play();
                    }else if(e.keyCode == 190){
                        $('#D2')[0].currentTime = 0;
                        $('#D2')[0].play();
                    }else if(e.keyCode == 187){
                        $('#Ds2')[0].currentTime = 0;
                        $('#Ds2')[0].play();
                    }else if(e.keyCode == 191){
                        $('#E2')[0].currentTime = 0;
                        $('#E2')[0].play();
                    }else if(e.keyCode == 81){
                        $('#C2')[0].currentTime = 0;
                        $('#C2')[0].play();
                    }else if(e.keyCode == 87){
                        $('#D2')[0].currentTime = 0;
                        $('#D2')[0].play();
                    }else if(e.keyCode == 69){
                        $('#E2')[0].currentTime = 0;
                        $('#E2')[0].play();
                    }else if(e.keyCode == 82){
                        $('#F2')[0].currentTime = 0;
                        $('#F2')[0].play();
                    }else if(e.keyCode == 84){
                        $('#G2')[0].currentTime = 0;
                        $('#G2')[0].play();
                    }else if(e.keyCode == 89){
                        $('#A2')[0].currentTime = 0;
                        $('#A2')[0].play();
                    }else if(e.keyCode == 85){
                        $('#B2')[0].currentTime = 0;
                        $('#B2')[0].play();
                    }else if(e.keyCode == 73){
                        $('#C3')[0].currentTime = 0;
                        $('#C3')[0].play();
                    }else if(e.keyCode == 79){
                        $('#D3')[0].currentTime = 0;
                        $('#D3')[0].play();
                    }else if(e.keyCode == 50){
                        $('#Cs2')[0].currentTime = 0;
                        $('#Cs2')[0].play();
                    }else if(e.keyCode == 51){
                        $('#Ds2')[0].currentTime = 0;
                        $('#Ds2')[0].play();
                    }else if(e.keyCode == 53){
                        $('#Fs2')[0].currentTime = 0;
                        $('#Fs2')[0].play();
                    }else if(e.keyCode == 54){
                        $('#Gs2')[0].currentTime = 0;
                        $('#Gs2')[0].play();
                    }else if(e.keyCode == 55){
                        $('#As2')[0].currentTime = 0;
                        $('#As2')[0].play();
                    }else if(e.keyCode == 57){
                        $('#Cs3')[0].currentTime = 0;
                        $('#Cs3')[0].play();
                    }else if(e.keyCode == 48){
                        $('#Ds3')[0].currentTime = 0;
                        $('#Ds3')[0].play();
                    }else if(e.keyCode == 80){
                        $('#E3')[0].currentTime = 0;
                        $('#E3')[0].play();
                    }else if(e.keyCode == 219){
                        $('#F3')[0].currentTime = 0;
                        $('#F3')[0].play();
                    }
                });    
                break;
            case -2:
                $(window).on('keydown.oct',function(e){
                    if(e.keyCode == 90){
                        $('#C0')[0].currentTime = 0;
                        $('#C0')[0].play();   
                    }else if(e.keyCode == 83){
                        $('#Cs0')[0].currentTime = 0;
                        $('#Cs0')[0].play();   
                    }else if(e.keyCode == 88){
                        $('#D0')[0].currentTime = 0;
                        $('#D0')[0].play();   
                    }else if(e.keyCode == 68){
                        $('#Ds0')[0].currentTime = 0;
                        $('#Ds0')[0].play();   
                    }else if(e.keyCode == 67){
                        $('#E0')[0].currentTime = 0;
                        $('#E0')[0].play();
                    }else if(e.keyCode == 86){
                        $('#F0')[0].currentTime = 0;
                        $('#F0')[0].play();
                    }else if(e.keyCode == 71){
                        $('#Fs0')[0].currentTime = 0;
                        $('#Fs0')[0].play();
                    }else if(e.keyCode == 66){
                        $('#G0')[0].currentTime = 0;
                        $('#G0')[0].play();
                    }else if(e.keyCode == 72){
                        $('#Gs0')[0].currentTime = 0;
                        $('#Gs0')[0].play();
                    }else if(e.keyCode == 78){
                        $('#A0')[0].currentTime = 0;
                        $('#A0')[0].play();
                    }else if(e.keyCode == 74){
                        $('#As0')[0].currentTime = 0;
                        $('#As0')[0].play();
                    }else if(e.keyCode == 77){
                        $('#B0')[0].currentTime = 0;
                        $('#B0')[0].play();
                    }else if(e.keyCode == 188){
                        $('#C1')[0].currentTime = 0;
                        $('#C1')[0].play();
                    }else if(e.keyCode == 76){
                        $('#Cs1')[0].currentTime = 0;
                        $('#Cs1')[0].play();
                    }else if(e.keyCode == 190){
                        $('#D1')[0].currentTime = 0;
                        $('#D1')[0].play();
                    }else if(e.keyCode == 187){
                        $('#Ds1')[0].currentTime = 0;
                        $('#Ds1')[0].play();
                    }else if(e.keyCode == 191){
                        $('#E1')[0].currentTime = 0;
                        $('#E1')[0].play();
                    }else if(e.keyCode == 81){
                        $('#C1')[0].currentTime = 0;
                        $('#C1')[0].play();
                    }else if(e.keyCode == 87){
                        $('#D1')[0].currentTime = 0;
                        $('#D1')[0].play();
                    }else if(e.keyCode == 69){
                        $('#E1')[0].currentTime = 0;
                        $('#E1')[0].play();
                    }else if(e.keyCode == 82){
                        $('#F1')[0].currentTime = 0;
                        $('#F1')[0].play();
                    }else if(e.keyCode == 84){
                        $('#G1')[0].currentTime = 0;
                        $('#G1')[0].play();
                    }else if(e.keyCode == 89){
                        $('#A1')[0].currentTime = 0;
                        $('#A1')[0].play();
                    }else if(e.keyCode == 85){
                        $('#B1')[0].currentTime = 0;
                        $('#B1')[0].play();
                    }else if(e.keyCode == 73){
                        $('#C2')[0].currentTime = 0;
                        $('#C2')[0].play();
                    }else if(e.keyCode == 79){
                        $('#D2')[0].currentTime = 0;
                        $('#D2')[0].play();
                    }else if(e.keyCode == 50){
                        $('#Cs1')[0].currentTime = 0;
                        $('#Cs1')[0].play();
                    }else if(e.keyCode == 51){
                        $('#Ds1')[0].currentTime = 0;
                        $('#Ds1')[0].play();
                    }else if(e.keyCode == 53){
                        $('#Fs1')[0].currentTime = 0;
                        $('#Fs1')[0].play();
                    }else if(e.keyCode == 54){
                        $('#Gs1')[0].currentTime = 0;
                        $('#Gs1')[0].play();
                    }else if(e.keyCode == 55){
                        $('#As1')[0].currentTime = 0;
                        $('#As1')[0].play();
                    }else if(e.keyCode == 57){
                        $('#Cs2')[0].currentTime = 0;
                        $('#Cs2')[0].play();
                    }else if(e.keyCode == 48){
                        $('#Ds2')[0].currentTime = 0;
                        $('#Ds2')[0].play();
                    }else if(e.keyCode == 80){
                        $('#E2')[0].currentTime = 0;
                        $('#E2')[0].play();
                    }else if(e.keyCode == 219){
                        $('#F2')[0].currentTime = 0;
                        $('#F2')[0].play();
                    }
                });    
                break;
        }
        break;
      }  
        
  }
  function chooseMessage(){
      if(countOptionValue % 2 == 1){
          return;
      }else if((countSpaceValue % 2 == 0) && (pianoOrBass == 0) && (countValue == 0)){
        $('#mesC2').slideDown(200).slideUp(3000);
      }else if((countSpaceValue % 2 == 0) && (pianoOrBass == 0) && (countValue == 1)){
        $('#mesC3').slideDown(200).slideUp(3000);
      }else if((countSpaceValue % 2 == 0) && (pianoOrBass == 0) && (countValue == 2)){
        $('#mesC4').slideDown(200).slideUp(3000);
      }else if((countSpaceValue % 2 == 0) && (pianoOrBass == 0) && (countValue == 3)){
        $('#mesC5').slideDown(200).slideUp(3000);
      }else if((countSpaceValue % 2 == 0) && (pianoOrBass == 0) && (countValue == 4)){
        $('#mesC6').slideDown(200).slideUp(3000);
      }else if((countSpaceValue % 2 == 0) && (pianoOrBass == 0) && (countValue == -1)){
        $('#mesC1').slideDown(200).slideUp(3000);
      }else if((countSpaceValue % 2 == 0) && (pianoOrBass == 0) && (countValue == -2)){
        $('#mesC0').slideDown(200).slideUp(3000);
      }else if((countSpaceValue % 2 == 0) && (pianoOrBass == 1) && (countValue == 0)){
        $('#mesC1').slideDown(200).slideUp(3000);
      }else if((countSpaceValue % 2 == 0) && (pianoOrBass == 1) && (countValue == 1)){
        $('#mesC2').slideDown(200).slideUp(3000);
      }else if((countSpaceValue % 2 == 0) && (pianoOrBass == 1) && (countValue == 2)){
        $('#mesC3').slideDown(200).slideUp(3000);
      }else if((countSpaceValue % 2 == 1) && (countValue == 0)){
        $('#mesAPC2').slideDown(200).slideUp(3000);
      }else if((countSpaceValue % 2 == 1) && (countValue == 1)){
        $('#mesAPC3').slideDown(200).slideUp(3000);
      }else if((countSpaceValue % 2 == 1) && (countValue == 2)){
        $('#mesAPC4').slideDown(200).slideUp(3000);
      }else if((countSpaceValue % 2 == 1) && (countValue == 3)){
        $('#mesAPC5').slideDown(200).slideUp(3000);
      }else if((countSpaceValue % 2 == 1) && (countValue == -1)){
        $('#mesAPC1').slideDown(200).slideUp(3000);
      }else if((countSpaceValue % 2 == 1) && (countValue == -2)){
        $('#mesAPC0').slideDown(200).slideUp(3000);
      }
  }
  setOctave();
  $(window).keydown(function(e){
    if(e.keyCode == 39){
        countValue++;
        setOctave();
        chooseMessage();
    }else if(e.keyCode == 37){
        countValue--;
        setOctave();
        chooseMessage();
    }else if(e.keyCode == 40){
        pianoOrBass = 1;
        setOctave();
        if(countOptionValue % 2 == 1){
            return;
        }else if(countSpaceValue % 2 == 0){
            $('#bass').slideDown(200).slideUp(3000);
        }
    }else if(e.keyCode == 38){
        pianoOrBass = 0;
        setOctave();
        if(countOptionValue % 2 == 1){
            return;
        }else if(countSpaceValue % 2 == 0){
            $('#default').slideDown(200).slideUp(3000);
        }    
    }else if(e.keyCode == 32){
        countSpaceValue++;
        setOctave();
        if(countOptionValue % 2 == 1){
            return;
        }else if(countSpaceValue % 2 == 1){
            $('#allPiano').slideDown(200).slideUp(3000);
        }else if((countSpaceValue % 2 == 0) && (pianoOrBass == 0)){
            $('#default').slideDown(200).slideUp(3000);
        }else{
            $('#bass').slideDown(200).slideUp(3000);
        }
    }else if(e.keyCode == 18){
        countOptionValue++;
        if(countOptionValue % 2 == 1){
            $('#help').fadeOut(1000);
        }else{
            if(countCommandValue % 2 == 0){
                $('#help').fadeIn(1000);
            }
        }
    }else if(e.metaKey || e.ctrlKey){
        countCommandValue++;
        if(countCommandValue % 2 == 1){
            $('#helpMenu').fadeIn(500);
            $('#help').fadeOut(300);
            $('#pad1,#pad2,#pad3,#pad4,#pad5,#pad6,#pad7,#pad8,#pad9,#rearrange,#blackout,#message,#bass,#allPiano,#default,[id^="mesC"],[id^="mesAPC"]').addClass('blur');
        }else{
            $('#helpMenu').fadeOut(500).delay(150).queue(function(next){
                $('#pad1,#pad2,#pad3,#pad4,#pad5,#pad6,#pad7,#pad8,#pad9,#rearrange,#blackout,#message,#bass,#allPiano,#default,[id^="mesC"],[id^="mesAPC"]').removeClass('blur');
                next();
            })
            if(countOptionValue % 2 ==0){
                $('#help').fadeIn(1000);
            }
        }
    }
  });
  
});
