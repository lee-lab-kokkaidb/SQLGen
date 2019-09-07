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
    if ((dietcheck.kokkai[0].checked) && (!dietcheck.kokkai[1].checked) && (!dietcheck.kokkai[2].checked)) {
        dchecked = "'01'";
        kokkaiOn = true;
    } else if ((dietcheck.kokkai[0].checked) && (dietcheck.kokkai[1].checked) && (!dietcheck.kokkai[2].checked)) {
        dchecked = "'01','02'";
        kokkaiOn = true;
    } else if ((dietcheck.kokkai[0].checked) && (dietcheck.kokkai[1].checked) && (dietcheck.kokkai[2].checked)) {
        dchecked = "'01','02','03'";
        kokkaiOn = true;
    } else if ((!dietcheck.kokkai[0].checked) && (dietcheck.kokkai[1].checked) && (!dietcheck.kokkai[2].checked)) {
        dchecked = "'02'";
        kokkaiOn = true;
    } else if ((!dietcheck.kokkai[0].checked) && (dietcheck.kokkai[1].checked) && (dietcheck.kokkai[2].checked)) {
        dchecked = "'02','03'";
        kokkaiOn = true;
    } else if ((!dietcheck.kokkai[0].checked) && (!dietcheck.kokkai[1].checked) && (dietcheck.kokkai[2].checked)) {
        dchecked = "'03'";
        kokkaiOn = true;
    } else if ((dietcheck.kokkai[0].checked) && (!dietcheck.kokkai[1].checked) && (dietcheck.kokkai[2].checked)) {
        dchecked = "'01','03'";
        kokkaiOn = true;
    }

    //地方議会
    var sysOn = false;
    var syscheck = document.forms.Chihou;
    var schecked = "";
    for (var i = 2; i <= 48; i++) {
        if (syscheck.chihou[i-2].checked) {
            if (sysOn == true){
                schecked +=",";
            }
            schecked += "'" + syscheck.chihou[i-2].value + "'";
            sysOn = true;
        }
    }

    //会議種類
    var kaigiOn = false;
    var kaicheck = document.forms.Kaigi;
    var kchecked = "";
    for (var i = 1; i <= 5; i++) {
        if (document.forms.Kaigi.kaigi[i - 1].checked) {
            if (kaigiOn == true){
                kchecked +=",";
            }
            kchecked += "'" + kaicheck.kaigi[i - 1].value + "'";
            kaigiOn = true;
            
        }

    }

    //検索語指定
    //1つめ
    var w1 = document.forms.word1;
    var w1exists;
    var w1str = false;
    if (w1.sword.value) {
        w1exists = true;
        var w1mode = w1.mode.value;
        if (w1mode == "talker_name"){
            w1str = "( talker_name like '%" + w1.sword.value + "%' or talker_jname like'%" + w1.sword.value + "%')";
        } else {
            w1str = w1.mode.value + " like '%" + w1.sword.value+"%'";
        }
    }

    //2つめ
    var w2 = document.forms.word2;
    var w2exists;
    var w2str = false;
    if (w2.sword.value) {
        w2exists = true;
        var w2mode = w2.mode.value;
        if (w2mode == "talker_name"){
            w2str = "( talker_name like '%" + w2.sword.value + "%' or talker_jname like'%" + w2.sword.value + "%')";
        } else {
            w2str = w2.mode.value + " like '%" + w2.sword.value+"%'";
        }
    }
    

    //3つめ
    var w3 = document.forms.word3;
    var w3exists;
    var w3str = false;
    if (w3.sword.value) {
        w3exists = true;
        var w3mode = w3.mode.value;
        if (w3mode == "talker_name"){
            w3str = "( talker_name like '%" + w3.sword.value + "%' or talker_jname like'%" + w3.sword.value + "%')";
        } else {
            w3str = w3.mode.value + " like '%" + w3.sword.value+"%'";
        }
    }
    

    //4つめ
    var w4 = document.forms.word4;
    var w4exists;
    var w4str = false;
    if (w4.sword.value) {
        w4exists = true;
        var w4mode = w4.mode.value;
        if (w4mode == "talker_name"){
            w4str = "'( talker_name like '%" + w4.sword.value + "%' or talker_jname like'%" + w4.sword.value + "%')";
        } else {
            w4str = w4.mode.value + " like '%" + w4.sword.value+"%'";
        }
    }
    

    //5つめ
    var w5 = document.forms.word5;
    var w5exists;
    var w5str = false;
    if (w5.sword.value) {
        w5exists = true;
        var w5mode = w5.mode.value;
        if (w5mode == "talker_name"){
            w5str = "(( talker_name like '%" + w5.sword.value + "%' or talker_jname like'%" + w5.sword.value + "%')";
        } else {
            w5str = w5.mode.value + " like '%" + w5.sword.value+"%'";
        }
    }
    
    //文を合成
    //最初のところ
    sqlout = "SELECT b.conf_id, b.conf_item_id, b.conf_dt<br>"
    + "FROM t_conf as a inner join t_conf_item as b on a.conf_id=b.conf_id and a.conf_dt = b.conf_dt inner join t_talker as c on b.talker_id=c.talker_id and a.conf_id = c.conf_id<br>"
    + "WHERE a.conf_dt BETWEEN ";

    //期間
    sqlout += "'" + start + "' and '" + end + "'";

    //議会選択
    //国会
    if (kokkaiOn){
        sqlout += " AND a.diet_tp IN (" + dchecked + ") ";
    }
    //地方議会
    if (sysOn) {
        sqlout += " AND a.sys_tp IN (" + schecked + ")";
    }

    //会議種類
    if (kaigiOn) {
        sqlout += " AND a.conf_tp IN (" + kchecked + ")";
    }

    //検索語
    if (w1exists && w2exists) {
        sqlout += " AND ( " + w1str + " " + w1.AON.value + " "; 
    } else if (w1exists && !w2exists) {
        sqlout += " AND ( " + w1str + ")"; 
    }

    if (w2exists && w3exists) {
        sqlout += w2str + " " + w2.AON.value + " "; 
    } else if (w2exists && !w3exists) {
        sqlout += w2str + ")"; 
    }

    if (w3exists && w4exists) {
        sqlout += w3str + " " + w3.AON.value + " "; 
    } else if (w3exists && !w4exists) {
        sqlout += w3str + ")"; 
    }

    if (w4exists && w5exists) {
        sqlout += w4str + " " + w4.AON.value + " "; 
    } else if (w4exists && !w5exists) {
        sqlout += w4str + ")"; 
    }

    if (w5exists) {
        sqlout += w5str + ")"; 
    }
    
    sqlout +=  " ORDER BY b.conf_dt ASC;"


    var sqloutarea = document.getElementById("sql");
    sqloutarea.innerHTML = sqlout;
}