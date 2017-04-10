define([ '../baseModel' ], function(Base) {
	var model = new Base('accountAgreement model');
	model.locale = {
		"en" : {
			"tncTitle" : "General Terms and Conditions",
			"tariffTitle" : "Tariff of Accounts and Services for Personal Customers",
			"debitCardTitle" : "Debit Card Terms and Conditions",
			"agree" : "I have read and understood the General Terms and Conditions, Tariff of Accounts and Services for Personal Customers and Debit Card Terms and Conditions that apply to the account(s) that I wish to open, and agree to be governed by them.",
			"btn" : "Continue",
			"pleaseClickHere" : "Please click here to open",
			"ConditionsPdf":"Please read all Terms and Conditions"
		},
		"zh" : {
			"tncTitle" : "一般章则条款与细则",
			"tariffTitle" : "账户和服务费率(个人客戶)",
			"debitCardTitle" : "借记卡章程",
			"agree" : "我已阅读并理解适用于我所申请账户之《一般章则条款与细则》、《账户和服务费率(个人客戶)》和《借记卡章程》，我同意并接受以上条款与细则之约束。",
			"btn" : "下一步",
			"pleaseClickHere":"请点击此处打开",
			"ConditionsPdf":"请阅读全部条款和条件"
		}

	};

	model.monitor = {
		step:'accountAgreement',//步骤
		systemType:'VTM',//系统类型
		operations:[
			{
				eventType:'event',
				monitorSource:'generalPdf',
				action:'click',
				target:'openGeneralPdf',
				description:'open General Terms and Conditions PDF'
			},
			{
				eventType:'event',
				monitorSource:'tariffPdf',
				action:'click',
				target:'openTariffPdf',
				description:'open Tariff of Accounts and Service for Personal Customer PDF'
			},
			{
				eventType:'event',
				monitorSource:'debitPdf',
				action:'click',
				target:'openDebitPdf',
				description:'open Debit Cards Terms and Conditions PDF'
			},
			{
				unique:'checkbox',
				eventType:'event',
				monitorSource:'agree-term',
				action:'click',
				target:'',
				description:'click account Agreement Check Box'
			},
			{
				unique:'continueButton',
				eventType:'event',
				monitorSource:'accountAgreement-next',
				action:'click',
				target:'goToScanId',
				description:'Continue Button(go to scanId page)'
			}
		]
	};

	return model;
});