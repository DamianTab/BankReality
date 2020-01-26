package damian.tab.bankreality.database.repository;

import damian.tab.bankreality.database.model.Account;
import damian.tab.bankreality.database.model.Credit;
import damian.tab.bankreality.database.model.CreditKey;
import damian.tab.bankreality.database.model.PrimaryKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface CreditRepository extends JpaRepository<Credit, PrimaryKey> {

//    @Modifying
//    @Query(value = "insert into CREDIT (LOAN_AMOUNT, INTEREST_RATE, LOAN_TIME, EMI, ACCOUNT_NUMBER, LOGIN) VALUES (:a,:b,:c,:d,:e,:f)", nativeQuery = true)
//    @Transactional
//    void insert(@Param("a") double a, @Param("b") int b, @Param("c") int c, @Param("d") double d, @Param("e") int e, @Param("f") int f);
}
