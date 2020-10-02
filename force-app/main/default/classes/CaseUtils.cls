public with sharing class CaseUtils {
    
    //Listar todos os casos que foram criados até 1 dia atras
    public static void closeOpenCases(){
        //Listar todos os casos abertos em D-1 que o status seja diferente de fechado
        List<Case> listCases = [SELECT ID, STATUS FROM CASE WHERE CREATEDDATE >= last_n_days:1 and STATUS != 'Closed'];
        //Verificar se o campo CaseStatus é igual a aberto
        // SIM => atualizar o status para fechado

        for(Case c : listCases){
            if(c.status == 'Open'){
                c.Status = 'Closed';
            }
        }

        update listCases;

    }

    @TestVisible
    private static Integer method(Integer a, Integer b){
        return a + b;
    }

}
