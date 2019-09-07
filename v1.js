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
    var start = document.forms.date.start.value;
    var end = document.forms.date.end.value;
    
    //議会選択
    //国会
    var kdietform = document.forms.Kokkai;
    var kokkaigikaimei;
    //地方議会
    
    //会議種類
    
    //検索語指定
    var w1 = document.forms.word1;
    var w2 = document.forms.word2;
    var w3 = document.forms.word3;
    var w4 = document.forms.word4;
    var w5 = document.forms.word5;
    

    var sqlout = document.getElementById("sql");
    sqlout.innerHTML = "<p>SELECT b.conf_id, b.conf_item_id, b.conf_dt<br>"
        + "FROM t_conf as a inner join t_conf_item as b on a.conf_id=b.conf_id and a.conf_dt = b.conf_dt inner join t_talker as c on b.talker_id=c.talker_id and a.conf_id = c.conf_id"
        + "WHERE a.conf_dt BETWEEN '" + start + "' and '" + end + "' AND a.diet_tp IN ('01') AND (" + w1.mode.value + " like '%" + w1.sword.value+"%' " + w1.AON.value + " (talker_name like'%竹島%' or talker_jname like'%竹島%')) ORDER BY b.conf_dt ASC;";
}