/**********正式API**********/
var zyAPIurl= {
    //资讯详情接口
    'news_detail':'http://api.lkhealth.net/index.php?r=news/newsdetail',
    //症状详情接口
    'symptom_detail':'http://api.lkhealth.net/index.php?r=drug/getsymptomexplanation',
    //药品详情接口
    'drug_detail':'http://api.lkhealth.net/index.php?r=drug/getdrugexplanation',
    //疾病详情接口
    'disease_detail':'http://api.lkhealth.net/index.php?r=drug/getdiseaseexplanation',
    //化验指标详情接口
    'assay_detail':'http://api.lkhealth.net/index.php?r=news/assaydetail&dataId=4',
    //药店列表接口968
    'drugstore_list':'http://api.lkhealth.net/index.php?r=store/chain',
    //药店详情接口
    'drugstore_detail':'http://api.lkhealth.net/index.php?r=store/storedetail&storeId=891&uid=883270',
}
/**********测试API**********/
var _zyAPIurl= {
    //资讯详情接口
    'news_detail':'http://testapi.lkhealth.net/index.php?r=news/newsdetail',
    //症状详情接口
    'symptom_detail':'http://testapi.lkhealth.net/index.php?r=drug/getsymptomexplanation',
    //药品详情接口
    'drug_detail':'http://testapi.lkhealth.net/index.php?r=drug/getdrugexplanation',
    //疾病详情接口
    'disease_detail':'http://testapi.lkhealth.net/index.php?r=drug/getdiseaseexplanation',
    //化验指标详情接口
    'assay_detail':'http://testapi.lkhealth.net/index.php?r=news/assaydetail',
    //药店列表接口
    'drugstore_list':'http://testapi.lkhealth.net/index.php?r=store/chain',
    //药店详情接口
    'drugstore_detail':'http://testapi.lkhealth.net/index.php?r=store/storedetail',
}

//console.log(_zyAPIurl, zyAPIurl)