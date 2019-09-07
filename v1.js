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
    var kokkaiOn = false;
    var dietcheck = document.forms.Kokkai;
    var dchecked;
    if ((kdietform.kokkai[0].checked) && (!kdietform.kokkai[1].checked) && (!kdietform.kokkai[2].checked)) {
        dchecked = "'01'";
        kokkaiOn = true;
    } else if ((kdietform.kokkai[0].checked) && (kdietform.kokkai[1].checked) && (!kdietform.kokkai[2].checked)) {
        dchecked = "'01','02'";
        kokkaiOn = true;
    } else if ((kdietform.kokkai[0].checked) && (kdietform.kokkai[1].checked) && (kdietform.kokkai[2].checked)) {
        dchecked = "'01','02','03'";
        kokkaiOn = true;
    } else if ((!kdietform.kokkai[0].checked) && (kdietform.kokkai[1].checked) && (!kdietform.kokkai[2].checked)) {
        dchecked = "'02'";
        kokkaiOn = true;
    } else if ((!kdietform.kokkai[0].checked) && (kdietform.kokkai[1].checked) && (kdietform.kokkai[2].checked)) {
        dchecked = "'02','03'";]
        kokkaiOn = true;
    } else if ((!kdietform.kokkai[0].checked) && (!kdietform.kokkai[1].checked) && (kdietform.kokkai[2].checked)) {
        dchecked = "'03'";
        kokkaiOn = true;
    } else if ((kdietform.kokkai[0].checked) && (!kdietform.kokkai[1].checked) && (kdietform.kokkai[2].checked)) {
        dchecked = "'01','03'";
        kokkaiOn = true;
    }

    //地方議会
    var sysOn = false;
    var syscheck = document.forms.Chihou;
    var schecked = "";
    for (var i = 2; i <= 47; i++) {
        if (syscheck.chihou[i-1].checked) {
            schecked += "'" + syscheck.chihou[i-1].value; + "',";
            sysOn = true;
        }
    }
    if (syscheck.chihou[48 - 1].checked) {
        schecked += "'" + syscheck.chihou[48 - 1].value; + "'";
        sysOn = true;
    }

    //会議種類
    var kaigiOn = false;
    var kaicheck = document.forms.Kaigi;
    var kchecked = "";
    for (var i = 1; i <= 5; i++) {
        if (kaicheck.kaigi[i-1].checked) {
            kchecked += "'" + kaicheck.kchecked[i-1].value; + "',";
            kaigiOn = true;
        }

    }
    if (kaicheck.kaigi[5 - 1].checked) {
        kchecked += "'" + kaicheck.kaigi[5 - 1].value; + "'";
        kaigiOn = true;
    }

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