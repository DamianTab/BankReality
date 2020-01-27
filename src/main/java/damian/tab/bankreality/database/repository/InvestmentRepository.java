package damian.tab.bankreality.database.repository;

import damian.tab.bankreality.database.model.Investment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvestmentRepository extends JpaRepository<Investment, Integer> {
}
