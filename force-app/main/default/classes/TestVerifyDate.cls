@isTest
private class TestVerifyDate {

	@isTest static void checkDates1() {
		Date data1 = Date.newInstance(2017,03,01);
        Date data2 = Date.newInstance(2017,03,10);

        Date data3 = VerifyDate.CheckDates(data1,data2);
	}

    @isTest static void checkDates2() {
		Date data1 = Date.newInstance(2017,03,01);
        Date data2 = Date.newInstance(2017,06,10);

        Date data3 = VerifyDate.CheckDates(data1,data2);
	}
}