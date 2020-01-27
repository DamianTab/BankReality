package damian.tab.bankreality.database.repository;

import damian.tab.bankreality.database.model.NaturalPerson;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NaturalPersonRepository extends JpaRepository<NaturalPerson, Integer> {
}
