package damian.tab.bankreality.database.repository;

import damian.tab.bankreality.database.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer> {
}
