package damian.tab.bankreality.database.repository;

import damian.tab.bankreality.database.model.LegalPerson;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LegalPersonRepository extends JpaRepository<LegalPerson, Integer> {
}
