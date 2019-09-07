function KokkaiAllChecked(){
    var all = document.Kokkai.KokkaiAll.checked;
    for (var i=0; i<document.Kokkai.kokkai.length; i++){
      document.Kokkai.kokkai[i].checked = all;
    }
  }

  // 一つでもチェックを外すと「全て選択」のチェック外れる
function KokkaiDisChecked(){
    var checks = document.Kokkai.kokkai;
    var checksCount = 0;
    
    for (var i=0; i<checks.length; i++){
        if (checks[i].checked == false) {
            document.Kokkai.KokkaiAll.checked = false;
        } else {
        checksCount += 1;
            if (checksCount == checks.length) {
                document.Kokkai.KokkaiAll.checked = true;
            }
        }
    }
}

function ChihouAllChecked(){
    var all = document.Chihou.ChihouAll.checked;
    for (var i=0; i<document.Chihou.chihou.length; i++){
      document.Chihou.chihou[i].checked = all;
    }
  }

  // 一つでもチェックを外すと「全て選択」のチェック外れる
function ChihouDisChecked(){
    var checks = document.Chihou.chihou;
    var checksCount = 0;
    
    for (var i=0; i<checks.length; i++){
        if (checks[i].checked == false) {
            document.Chihou.ChihouAll.checked = false;
        } else {
        checksCount += 1;
            if (checksCount == checks.length) {
                document.Chihou.ChihouAll.checked = true;
            }
        }
    }
}

function generate(){
    
    //検索期間
    var dateform = document.forms.date;
    start = dateform.start.value;
    end = dateform.end.value;
    
    //議会選択
    //国会
    var kdietform = document.forms.Kokkai;
    var kokkaigikaimei
    //地方議会
    
    //会議種類
    
    //検索語指定
}