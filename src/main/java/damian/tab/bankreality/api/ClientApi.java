package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/client")
@RestController
public class ClientApi extends GenericRESTApi<Client> {
    public ClientApi(JpaRepository<Client, Integer> dao) {
        super(dao);
    }
}
