package damian.tab.bankreality.database.repository;

import damian.tab.bankreality.database.model.Credit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CreditRepository extends JpaRepository<Credit, Integer> {

    @Query(nativeQuery = true, value =
            "SELECT BANK.ESTIMATEEMI(:pAmount,:pInterestRate,:pTime ) FROM dual")
    double estimateEMI(@Param("pAmount") Double pAmount,
                          @Param("pInterestRate") Integer pInterestRate,
                          @Param("pTime") Integer pTime);
}
